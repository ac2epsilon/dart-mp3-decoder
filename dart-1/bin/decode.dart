import 'dart:io';
import 'dart:typed_data';
import 'package:collection/collection.dart';
import 'constants.dart' as constants;
import 'header.dart';
import 'header.ext.dart';

const String file1 = constants.brownMp3;
const String file2 = constants.decfile;

void main(List<String> args) {
  Uint8List bytes = File(file1).readAsBytesSync();

  List<int> ffs = [];
  bytes.forEachIndexed((i, el) {
    if (el == 0xFF && (bytes[i + 1] & 0xe0) == 0xe0) ffs.add(i);
  });
  List<Header> h =
      ffs.map((el) => Header(bytes, el)).where((el) => el.valid()).toList();
  print("ffs = ${ffs.length} valid ${h.length}");
  h[0].druk();
  h[1].druk();
  h[2].druk();
  h[3].druk();
}
