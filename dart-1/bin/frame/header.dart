import 'dart:typed_data';

/*
  rows 0,1 MPEG II for 16, 22.05, 24 kHz Layer I and II+III
  rows 2-4 MPEG I for 32, 40, 44.1 kHz Layer I, II, III 
*/
const bitrates = [
  [0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, -1],
  [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1],
  [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1],
  [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1],
  [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1],
];

class Element {
  String field;
  int value;
  String legend;
  Element(this.field, this.value, this.legend);
}

class Header {
  final Uint8List bytes; // byte array of whole file
  final int frame; // offset in array
// byte +1
  int get id => bitz(bytes[frame + 1], 0x08 /*0000 1000*/, 3);
  int get layer => bitz(bytes[frame + 1], 0x06 /*0000 0110*/, 1);
  int get protec => bitz(bytes[frame + 1], 0x01 /*0000 0001*/, 0);
// byte +2
  int get btindex => bitz(bytes[frame + 2], 0xf0 /*1111 0000*/, 4);
  int get bitrateColumn => detectBitrateColumn(); // computed
  int get bitrate => bitrateColumn >= 0 ? bitrates[bitrateColumn][btindex] : -1;

  int get sampling => bitz(bytes[frame + 2], 0x0c /*0000 1100*/, 2);
  int get padding => bitz(bytes[frame + 2], 0x02 /*0000 0010*/, 1);
  int get private => bitz(bytes[frame + 2], 0x01 /*0000 0001*/, 0);
// byte +3
  int get mode => bitz(bytes[frame + 3], 0xc0 /*1100 0000*/, 6);
  int get modeExt => bitz(bytes[frame + 3], 0x30 /*0011 0000*/, 4);
  int get copyright => bitz(bytes[frame + 3], 0x08 /*0000 1000*/, 3);
  int get origHome => bitz(bytes[frame + 3], 0x04 /*0000 0100*/, 2);
  int get emphasis => bitz(bytes[frame + 3], 0x03 /*0000 0011*/, 0);

  static int bitz(int byte, int mask, int shift) => (byte & mask) >> shift;

  bool valid() {
    if (layer == 0) return false; // 00 is reserved value
    if (bitrateColumn < 0 || bitrateColumn > 4) return false;
    if (bitrate < 8 || bitrate > 448) return false; // including 0 and -1
    return true;
  }

  List<Element> hdrs = [];

  Header(this.bytes, this.frame) {
    hdrs.add(Element('id', id, detectId(id)));
    hdrs.add(Element('layer', layer, detectLayer(layer)));
    hdrs.add(Element('protection_bit', protec, detectProtection(protec)));
//- - - - - - - - - - - - - - -
    hdrs.add(Element('bitrate_index', btindex, 'index'));
    hdrs.add(Element('bitrate_column', bitrateColumn, '*calculated'));
    hdrs.add(Element('bitrate_calculated', bitrate, 'kBit/s'));

    hdrs.add(Element('sampling_frequency', sampling, ''));
    hdrs.add(Element('padding_bit', padding, ''));
    hdrs.add(Element('private_bit', private, ''));
//- - - - - - - - - - - - - - -
    hdrs.add(Element('mode', mode, ''));
    hdrs.add(Element('mode_extension', modeExt, ''));
    hdrs.add(Element('copyright', copyright, ''));
    hdrs.add(Element('original/home', origHome, ''));
    hdrs.add(Element('emphasis', emphasis, ''));
  }
  void druk() {
    print(""" 
- - - - - - - - - - - - -
  Element $frame 
- - - - - - - - - - - - - -""");
    hdrs.forEach((el) {
      print("${el.field} = ${el.value} = ${el.legend}");
    });
  }

  String detectId(int v) {
    var result = 'Unknown';
    if (v == 0) result = 'MPEG-II';
    if (v == 1) result = 'MPEG-I';
    return result;
  }

  String detectLayer(int v) {
    var result = 'Unknown';
    const layers = [
      'Reserved',
      'Layer III',
      'Layer II',
      'Layer I',
    ];
    if (v >= 0 && v <= 3) result = layers[v];
    return result;
  }

  String detectProtection(int v) {
    var result = 'Unknown';
    if (v == 0) result = 'Protection On';
    if (v == 1) result = 'Protection Off';
    return result;
  }

  int detectBitrateColumn() {
    var result = -1;
    if (id == 1) {
      // MPEG II, Layer III, II, I
      if (layer == 1) {
        result = 4;
      } else if (layer == 2) {
        result = 3;
      } else if (layer == 3) {
        result = 2;
      }
    } else if (id == 0) {
      // MPEG II, Layer 1 and II+III
      if (layer == 3) {
        result = 0;
      } else if (layer == 2 || layer == 1) {
        result = 1;
      }
    }
    return result;
  }
}
