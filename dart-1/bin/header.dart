import 'dart:typed_data';
import './header.h.dart';

class Header {
  static int bitz(int byte, int mask, int shift) => (byte & mask) >> shift;

  final Uint8List bytes; // byte array of whole file
  final int frame; // offset in array
// byte +1
  int get id => bitz(bytes[frame + 1], 0x18 /*0001 1000*/, 3);
  int get layer => bitz(bytes[frame + 1], 0x06 /*0000 0110*/, 1);
  int get protec => bitz(bytes[frame + 1], 0x01 /*0000 0001*/, 0);
  int get crc => protec == 0 ? bytes[frame + 4] + (bytes[frame + 5] << 8) : -1;
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
    hdrs.add(Element('crc_bit', protec, protec == 1 ? 'Off' : '$crc'));
//- - - - - - - - - - - - - - -
    hdrs.add(Element('bitrate_index', btindex, 'index'));
    hdrs.add(Element('bitrate_column', bitrateColumn, '*calculated'));
    hdrs.add(Element('bitrate_calculated', bitrate, '*kBit/s'));

    hdrs.add(Element('sampling', sampling, 'index'));
    hdrs.add(Element('sampling_frequency', detectSamplingFrequency, '*Khz'));

    hdrs.add(Element('padding_bit', padding, '$padding FLB $FLB'));
    hdrs.add(Element('private_bit', private, '$private'));
//- - - - - - - - - - - - - - -
    hdrs.add(Element('mode', mode, detectMode()));
    hdrs.add(Element('mode_extension', modeExt, detectExtMode()));
    hdrs.add(Element('copyright', copyright, detectCopyright()));
    hdrs.add(Element('original/home', origHome, detectOriginal()));
    hdrs.add(Element('emphasis', emphasis, detectEmphasis()));
  }
  void druk() {
    print(""" 
- - - - - - - - - - - - -
  Element $frame 
- - - - - - - - - - - - - -""");
    hdrs.forEach((el) => print("${el.field} = ${el.value} = ${el.legend}"));
  }

  bool get badId => ![0, 2, 3].contains(id);
  final ids = ['MPEG-II 2.5', 'XXX', 'MPEG-II', 'MPEG-I'];
  String get detectId => badId ? 'Bad ID' : ids[id];

  bool get badLayer => ![1, 2, 3].contains(layer);
  final layers = ['XXX', 'Layer III', 'Layer II', 'Layer I'];
  String get detectLayer => badLayer ? 'Bad Layer' : layers[layer];

  int detectBitrateColumn() {
    if (badId || badLayer) return -1;
    return id == 3 ? 5 - layer : (layer == 3 ? 0 : 1);
    // MPEG I, 1,2,3 => Layer III, II, I => 4,3,2
    // MPEG II Layer 1 and II+III
  }

  int get detectSamplingFrequency {
    if (id == 1 || sampling == 3) return -1;
    return samplings[id][sampling];
  }

  double get FLB => 144 * bitrate / sampling + padding;

  final modes = ['stereo', 'joint_stereo', 'dual_channel', 'single_channel'];
  String detectMode() {
    return modes[mode] + (validateMode() ? ' Valid' : ' Invalid');
  }

  final extModes = [
    ['Int- MS-', 'Int+ MS-', 'Int- MS+', 'Int+ MS+'],
    ['bands 4 to 31', 'bands 8 to 31', 'bands 12 to 31', 'bands 8 to 31']
  ];
  String detectExtMode() {
    var result = "Not Joint Stereo"; // 123 => 321
    if (mode == 1) {
      if (layer == 0) result = "Wrong Layer 0";
      if (layer == 1) result = extModes[0][modeExt];
      if (layer == 2 || layer == 3) result = extModes[1][modeExt];
    }
    return result;
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
