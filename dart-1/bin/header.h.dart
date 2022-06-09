/*
  rows 0,1 MPEG II for 16, 22.05, 24 kHz Layer I and II+III
  rows 2-4 MPEG I for 32, 40, 44.1 kHz Layer I, II, III 
*/
const bitrates = [
  [0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, -1],
  [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1],
  [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1],
  [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1],
  [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1],
];

const ids = ['MPEG-II 2.5', 'Reserved', 'MPEG-II', 'MPEG-I'];

const layers = [
  'Reserved',
  'Layer III',
  'Layer II',
  'Layer I',
];

const samplings = [
  [11025, 12000, 8000],
  [-1, -1, -1], // id == 1, no such thing
  [22050, 24000, 16000],
  [44100, 48000, 32000]
];

class Element {
  String field;
  num value;
  String legend;
  Element(this.field, this.value, this.legend);
}
