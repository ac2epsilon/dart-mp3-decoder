import 'dart:io';
import 'constants.dart' as constants;

int t2ms(String time) {
  final sect = time.split('.');
  return (int.parse(sect[0]) * 60 + int.parse(sect[1])) * 1000 +
      int.parse(sect[2]) * 10;
}

Iterable<Triple> readDat({String inDat = constants.TheBlueCrossDAT}) {
  var dat = File(inDat);
  List<String> lines = dat.readAsLinesSync();
  var data =
      lines.where((el) => el.trim().isNotEmpty && el.contains('`')).map((el) {
    var splitS = el.split('`');
    if (splitS.length < 2) throw FormatException();
    var splitT = splitS[0].split('-');
    if (splitT.length != 2) throw FormatException();
    return Triple(t2ms(splitT[0]), t2ms(splitT[1]), splitS[1]);
  });
  return data;
}

class Triple {
  int t1;
  int t2;
  String text;
  Triple(this.t1, this.t2, this.text);
}
