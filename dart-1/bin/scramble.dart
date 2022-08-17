import 'dart:io';
import 'dart:convert';
import 'package:html/parser.dart' show parse;
import 'chap/chap.dart';
import 'constants.dart' as constants;

void main() {
  String file1 = constants.file1;
  String file2 = constants.file2;

  File(file1).readAsString().then((String contents) {
    var document = parse(contents);
    var chapters = document.getElementsByClassName("bookpage--chapters");
    var chap = chapters[0].getElementsByClassName("chapter__default");
    var listed = [];
    for (final el in chap) {
      final id = el.attributes['data-id'];
      final pos = el.attributes['data-pos'];
      final time = el.getElementsByClassName("chapter__default--time")[0].text;
      final chappy =
          el.getElementsByClassName("chapter__default--title")[0].text;
      listed.add(Chap.fromText(id!, pos!, time, chappy));
    }
    var encoder = JsonEncoder.withIndent("   ");
    var jListed = encoder.convert(listed);
    print('Generated ${jListed.length}');
    File(file2).writeAsString(jListed);
  });
}
