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

const ids = ['MPEG-II 2.5', 'Reserved', 'MPEG-II', 'MPEG-I'];

const layers = [
  'Reserved',
  'Layer III',
  'Layer II',
  'Layer I',
];

const samplings = [
  [11025, 12000, 8000],
  [-1, -1, -1], // id == 1, no such thing
  [22050, 24000, 16000],
  [44100, 48000, 32000]
];

class Element {
  String field;
  num value;
  String legend;
  Element(this.field, this.value, this.legend);
}

class Header {
  final Uint8List bytes; // byte array of whole file
  final int frame; // offset in array
// byte +1
  int get id => bitz(bytes[frame + 1], 0x18 /*0001 1000*/, 3);
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
    if (sampling == 3 || detectSamplingFrequency == -1) return false;
    return true;
  }

  List<Element> hdrs = [];

  Header(this.bytes, this.frame) {
    hdrs.add(Element('id', id, detectId));
    hdrs.add(Element('layer', layer, detectLayer));
    hdrs.add(Element('protection_bit', protec, detectProtection));
//- - - - - - - - - - - - - - -
    hdrs.add(Element('bitrate_index', btindex, 'index'));
    hdrs.add(Element('bitrate_column', bitrateColumn, '*calculated'));
    hdrs.add(Element('bitrate_calculated', bitrate, '*kBit/s'));

    hdrs.add(Element('sampling', sampling, 'index'));
    hdrs.add(Element('sampling_frequency', detectSamplingFrequency, '*Khz'));

    hdrs.add(Element('padding_bit', padding, detectPadding()));
    hdrs.add(Element('private_bit', private, ''));
//- - - - - - - - - - - - - - -
    hdrs.add(Element('mode', mode, detectMode()));
    hdrs.add(Element('mode_extension', modeExt, ''));
    hdrs.add(Element('copyright', copyright, detectCopyright()));
    hdrs.add(Element('original/home', origHome, detectOriginal()));
    hdrs.add(Element('emphasis', emphasis, detectEmphasis()));
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

  String get detectId {
    var result = 'Unknown';
    if (id >= 0 && id <= 3) result = ids[id];
    return result;
  }

  String get detectLayer {
    var result = 'Unknown';
    if (layer >= 0 && layer <= 3) result = layers[layer];
    return result;
  }

  String get detectProtection {
    var result = 'Unknown';
    if (protec == 0) result = 'Protection On';
    if (protec == 1) result = 'Protection Off';
    return result;
  }

  int detectBitrateColumn() {
    var result = -1;
    if (id == 3) {
      // MPEG I, Layer III, II, I
      if (layer == 1) {
        result = 4;
      } else if (layer == 2) {
        result = 3;
      } else if (layer == 3) {
        result = 2;
      }
    } else if (id == 2 || id == 0 /* 2.5 */) {
      // MPEG II, Layer 1 and II+III
      if (layer == 3) {
        result = 0;
      } else if (layer == 2 || layer == 1) {
        result = 1;
      }
    }
    return result;
  }

  int get detectSamplingFrequency {
    if (id == 1 || sampling == 3) return -1;
    return samplings[id][sampling];
  }

  String detectPadding() {
    return padding == 1 ? 'Padding: Round' : 'Padding: Truncate';
  }

  String detectMode() {
    const modes = ['stereo', 'joint_stereo', 'dual_channel', 'single_channel'];
    return modes[mode] + (validateMode() ? ' VALID' : ' INVALID');
  }

  String detectCopyright() {
    return copyright == 1 ? 'Copyright: Yes' : 'Copyright: Not';
  }

  String detectOriginal() {
    return origHome == 1 ? 'Original' : 'Home';
  }

  String detectEmphasis() {
    const emph = ['no emphasis', '50/15 microsec', 'reserved', 'CCITT J.17'];
    return emph[emphasis];
  }

  bool validateMode() {
    bool result = true;
    if (layer == 2) {
      result = false;
      if ([32, 48, 56, 80].contains(bitrate) && mode == 3) {
        result = true;
      } else if ([64, 96, 112, 128, 160, 192].contains(bitrate)) {
        result = true;
      } else if ([224, 256, 320, 384].contains(bitrate) && mode != 3) {
        result = true;
      }
    }
    return result;
  }
}
