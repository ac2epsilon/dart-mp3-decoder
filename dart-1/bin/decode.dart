import 'dart:io';
import 'dart:typed_data';
import 'package:collection/collection.dart';
import 'constants.dart' as constants;
import 'header.dart';

const String file1 = constants.brownS01E01;
const String file2 = constants.decfile;

void main(List<String> args) {
  Uint8List bytes = File(file1).readAsBytesSync();
  List<int> ffs = [];
  bytes.forEachIndexed((i, el) {
    // known bug^ i+1 may not be possible index!
    if (el == 0xff && (bytes[i + 1] & 0xe0) == 0xe0) ffs.add(i);
  });
  List<Header> h = ffs
      .map((el) => Header(bytes, el))
      .toList()
      .where((el) => el.valid())
      .toList();
  print("ffs = ${ffs.length} filtered valid ${h.length}");
  h[1050].druk();
}
