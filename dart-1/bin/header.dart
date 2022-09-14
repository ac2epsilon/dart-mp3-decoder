import 'dart:typed_data';
import 'package:convert/convert.dart';
import './check_frame.dart';

class Header {
  final Uint8List bytes; // byte array of whole file
  final int frame; // offset in array
  late final int hId, hLayer, hProtec;
  late final int hBtrIdx, hSamplIdx, hPadding, hPrivate;
  late final int hMode, hModeExt, hCopyright, hOrigHome, hEmphasis;
  Header(this.bytes, this.frame) {
    int bitz(int byte, int mask, int shift) => (byte & mask) >> shift;

    final int b1 = bytes[frame + 1]; // byte +1
    hId = bitz(b1, 0x18 /*0001 1000*/, 3);
    hLayer = bitz(b1, 0x06 /*0000 0110*/, 1);
    hProtec = bitz(b1, 0x01 /*0000 0001*/, 0);

    final int b2 = bytes[frame + 2]; // byte +2
    hBtrIdx = bitz(b2, 0xf0 /*1111 0000*/, 4);
    hSamplIdx = bitz(b2, 0x0c /*0000 1100*/, 2);
    hPadding = bitz(b2, 0x02 /*0000 0010*/, 1);
    hPrivate = bitz(b2, 0x01 /*0000 0001*/, 0);

    final int b3 = bytes[frame + 3]; // byte +3
    hMode = bitz(b3, 0xc0 /*1100 0000*/, 6);
    hModeExt = bitz(b3, 0x30 /*0011 0000*/, 4);
    hCopyright = bitz(b3, 0x08 /*0000 1000*/, 3);
    hOrigHome = bitz(b3, 0x04 /*0000 0100*/, 2);
    hEmphasis = bitz(b3, 0x03 /*0000 0011*/, 0);
  }
  String get hexVal {
    return bytes
        .sublist(frame, frame + 4)
        .map((el) => hex.encode([el]))
        .join(':');
  }

// ---
  cfMpegVer get cfVersion => cfMpegVer.fromId(hId);
  int get cfLayer => 4 - hLayer;
  int get cfSamples => cfSamplesMatrix[cfLayer][cfVersion.id];
  bool get cfCrc16 => hProtec == 0;
// ---
  int get cfBitrate =>
      1000 * cfBitrateMatrix[cfVersion.id][cfLayer - 1][hBtrIdx];
  int get cfSampleRate => cfSamplerateMatrix[hSamplIdx][cfVersion.id];
  int get cfFrameLength {
    var result = cfLayer == 1
        ? 4 * hPadding + 4 * ((12 * cfBitrate) / cfSampleRate)
        : hPadding + cfSamples * cfBitrate / (8 * cfSampleRate);
    return result.toInt();
  }

  int get cfFrametime {
    return (1000 * cfSamples / cfSampleRate).floor();
  }
// ---

  bool get badId => cfVersion == cfMpegVer.MPEG_VER_INVALID;
  bool get badLayer => cfLayer == 4;
  bool valid() {
    if (badId || badLayer) return false;
    if (cfBitrate < 8000 || cfBitrate > 448000) return false;
    if (hSamplIdx == 3) return false;
    if (cfSampleRate < 8000) return false;
    return true;
  }

  int get iNext => frame + cfFrameLength;
  int get bNext => bytes[iNext];

  final extModes = [
    ['Int- MS-', 'Int+ MS-', 'Int- MS+', 'Int+ MS+'],
    ['bands 4 to 31', 'bands 8 to 31', 'bands 12 to 31', 'bands 8 to 31']
  ];
  String detectExtMode() {
    var result = "Not Joint Stereo"; // 123 => 321
    if (hMode == 1) {
      if (cfLayer == 0) result = "Wrong Layer 0";
      if (cfLayer == 1) result = extModes[0][hModeExt];
      if (cfLayer == 2 || cfLayer == 3) result = extModes[1][hModeExt];
    }
    return result;
  }

  bool validateMode() {
    bool result = true;
    if (cfLayer == 2) {
      result = false;
      if ([32, 48, 56, 80].contains(cfBitrate) && hMode == 3) {
        result = true;
      } else if ([64, 96, 112, 128, 160, 192].contains(cfBitrate)) {
        result = true;
      } else if ([224, 256, 320, 384].contains(cfBitrate) && hMode != 3) {
        result = true;
      }
    }
    return result;
  }
}
