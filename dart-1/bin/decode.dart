import 'dart:io';
import 'dart:typed_data';
import 'package:collection/collection.dart';
import 'constants.dart' as constants;
import 'frame/header.dart';

const String file1 = constants.mp3file;
const String file2 = constants.decfile;

void main(List<String> args) {
  Uint8List bytes = File(file1).readAsBytesSync();
  List<int> ffs = [];
  bytes.forEachIndexed((i, el) {
    if (el == 0xff && (bytes[i + 1] & 0xf0) == 0xf0) ffs.add(i);
  });
  List<Header> h = ffs
      .map((el) => Header(bytes, el))
      .toList()
      .where((el) => el.valid())
      .toList();
  print("ffs = ${ffs.length} filtered valid ${h.length}");
  h[1].druk();
}
