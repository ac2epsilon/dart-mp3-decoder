import 'package:json_annotation/json_annotation.dart';

part 'chap.g.dart';

@JsonSerializable()
class Chap {
  int id = 0;
  int pos = 0;
  int time = 0;
  int tome = 0;
  int book = 0;
  int chap = 0;

  Chap(this.id, this.pos, this.time, this.tome, this.book, this.chap);

  Chap.fromText(String tid, String tpos, String ttime, String tchappy) {
    id = int.parse(tid);
    pos = int.parse(tpos);

    var _t = ttime.split(':'); // "07:27"
    time = int.parse(_t[0]) * 60 + int.parse(_t[1]);

    var _c = tchappy.split('_'); // "05_02_12_Epilog"
    tome = int.parse(_c[0]);
    book = int.parse(_c[1]);
    chap = int.parse(_c[2]);
  }
  @override
  String toString() {
    return id.toString();
  }

  factory Chap.fromJson(Map<String, dynamic> json) => _$ChapFromJson(json);

  Map<String, dynamic> toJson() => _$ChapToJson(this);
}
