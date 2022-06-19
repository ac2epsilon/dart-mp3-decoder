import 'dart:io';
import 'dart:typed_data';
import 'package:collection/collection.dart';
import 'constants.dart' as constants;
import 'header.dart';
import 'header.ext.dart';

const String file1 = constants.brownS01E01;
const String file2 = constants.decfile;

void main(List<String> args) {
  Uint8List bytes = File(file1).readAsBytesSync();

  List<int> ffs = [];
  bytes.forEachIndexed((i, el) {
    if (el == 255 && (bytes[i + 1] & 0xe0) == 0xe0) ffs.add(i);
  });
  List<Header> h =
      ffs.map((el) => Header(bytes, el)).where((el) => el.valid()).toList();
  print("ffs = ${ffs.length} valid ${h.length}");
  h[1048].druk();
}
