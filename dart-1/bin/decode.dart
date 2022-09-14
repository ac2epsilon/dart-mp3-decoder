import 'dart:io';
import 'dart:typed_data';
import 'package:collection/collection.dart';
import 'constants.dart' as constants;
import 'header.dart';
import 'header.ext.dart';

const String file1 = constants.brownMp3;
const String file2 = constants.decfile;

Function eq = const ListEquality().equals;
void main(List<String> args) {
  Uint8List bytes = File(file1).readAsBytesSync();

  List<Header> h = [];
  for (int i = 0; i < bytes.length; i++) {
    if (i < bytes.length - 9 && // ID3+1/1/1/4 bytes
        eq(bytes.sublist(i, i + 6), [73, 68, 51, 3, 0, 0])) {
      var size = bytes[i + 6] << 21 |
          bytes[i + 7] << 14 |
          bytes[i + 8] << 7 |
          bytes[i + 9];

      print("skippind ID3 ${bytes.sublist(i, i + 10)} size=ID3+$size");
      i += 10 + size - 1; // 'cose i++ we do
    }
    if (i < bytes.length - 1 &&
        bytes[i] == 0xFF &&
        (bytes[i + 1] & 0xe0) == 0xe0) {
      var trans = Header(bytes, i);
      if (trans.valid()) {
        h.add(trans);
        if (trans.bNext == 0xFF) {
          if (trans.cfFrameLength == 208 || trans.cfFrameLength == 209) {
            i = trans.iNext - 1; // ;cose we i++ afrer continue
          } else {
            trans.druk();
          }
        }
      }
    }
  }
  print("valid ${h.length}");
}
