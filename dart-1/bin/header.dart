import 'dart:typed_data';
import 'package:convert/convert.dart';
import './header.h.dart';

class Header {
  static int bitz(int byte, int mask, int shift) => (byte & mask) >> shift;

  final Uint8List bytes; // byte array of whole file
  final int frame; // offset in array
  String get hexVal {
    return bytes
        .sublist(frame, frame + 4)
        .map((el) => hex.encode([el]))
        .join(':');
  }

  int get b1 => bytes[frame + 1];
  int get b2 => bytes[frame + 2];
  int get b3 => bytes[frame + 3];
// byte +1
  int get id => bitz(b1, 0x18 /*0001 1000*/, 3);
  int get layer => bitz(b1, 0x06 /*0000 0110*/, 1);
  int get protec => bitz(b1, 0x01 /*0000 0001*/, 0);
// byte +2
  int get btrIdx => bitz(b2, 0xf0 /*1111 0000*/, 4);
  int get btrCol => detectbtrCol(); // computed
  int get bitrate => btrCol >= 0 ? bitrates[btrCol][btrIdx] : -1;
  int get samplIdx => bitz(b2, 0x0c /*0000 1100*/, 2);
  int get padding => bitz(b2, 0x02 /*0000 0010*/, 1);
  int get private => bitz(b2, 0x01 /*0000 0001*/, 0);
// byte +3
  int get mode => bitz(b3, 0xc0 /*1100 0000*/, 6);
  int get modeExt => bitz(b3, 0x30 /*0011 0000*/, 4);
  int get copyright => bitz(b3, 0x08 /*0000 1000*/, 3);
  int get origHome => bitz(b3, 0x04 /*0000 0100*/, 2);
  int get emphasis => bitz(b3, 0x03 /*0000 0011*/, 0);

  bool get badId => ![0, 2, 3].contains(id);
  bool get badLayer => ![1, 2, 3].contains(layer);
  bool valid() {
    if (badId || badLayer) return false;
    if (btrCol < 0 || btrCol > 4) return false;
    if (bitrate < 8 || bitrate > 448) return false; // including 0 and -1
    if (samplFreq == -1) return false;
    return true;
  }

  Header(this.bytes, this.frame);

  int detectbtrCol() {
    if (badId || badLayer) return -1;
    return id == 3 ? (5 - layer) : (layer == 3 ? 0 : 1);
    // MPEG I, 1,2,3 => Layer III, II, I => 4,3,2
    // MPEG II, II.5 Layer 1 and II+III
  }

  num get samplFreq {
    if (badId || samplIdx == 3) return -1;
    return samplings[id][samplIdx];
  }

  int get flb => (144 * bitrate / samplFreq + padding).truncate();
  int get iNext => frame + flb;
  int get bNext => bytes[iNext];

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
