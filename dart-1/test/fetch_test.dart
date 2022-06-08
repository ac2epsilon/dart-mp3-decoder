import 'dart:io';
import 'package:test/test.dart';
import '../bin/constants.dart' as constants;

void main() {
  test('input file must be in the place', () {
    String file1 = constants.file1;
    expect(File(file1).existsSync(), isTrue);
  });
}
