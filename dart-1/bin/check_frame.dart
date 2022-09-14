// ignore_for_file: camel_case_types, constant_identifier_names

const List<List<List<int>>> cfBitrateMatrix /*[9][16]*/ = [
  /* MPEG 1 */
  [
    [1, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 0],
    [1, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 0],
    [1, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0],
  ],
  /* MPEG 2 */
  [
    [1, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 0],
    [1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0],
    [1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0],
  ],
  /* MPEG 2.5 */
  [
    [1, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 0],
    [1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0],
    [1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0],
  ]
];

const List<List<int>> cfSamplerateMatrix /*[3][3]*/ = [
/* MPEG   1.0    2.0     2.5   */
  [44100, 22050, 11025],
  [48000, 24000, 12000],
  [32000, 16000, 8000],
];

const List<List<int>> cfSamplesMatrix /*[4][3]*/ = [
/* MPEG   1.0    2.0     2.5   */
  [0, 0, 0],
  [384, 384, 384],
  [1152, 1152, 1152],
  [1152, 576, 576],
];

enum cfMpegVer {
  MPEG_VER_10(0),
  MPEG_VER_20(1),
  MPEG_VER_25(2),
  MPEG_VER_INVALID(3);

  final int id;
  const cfMpegVer(this.id);
  factory cfMpegVer.fromId(int headervalue) {
    if (headervalue == 3) return MPEG_VER_10;
    if (headervalue == 2) return MPEG_VER_20;
    if (headervalue == 0) return MPEG_VER_25;
    return MPEG_VER_INVALID;
  }
}

class cfFrameInfo {
  cfMpegVer? version; /* MPEG version				*/
  int? layer; /* layer				*/
  int? bitrate; /* bitrate in bits per second		*/
  int? samplerate; /* samplerate in Hertz			*/
  int? padding; /* padding (bool)			*/
  int? private; /* private (bool)			*/
  int? stereo; /* stereo (4 modes)			*/
  int? jointstereo; /* joint stereo				*/
  int? copyright; /* copyright (bool)			*/
  int? original; /* original recording			*/
  int? emphasis; /* emphasis				*/
  int? length; /* length in bytes			*/
  int? time; /* time in miliseconds			*/
  int? samples; /* number of samples			*/
  int? crc16; /* crc16 (0==not available, or crc16 value) */
  int? offset; /* offset of this frame			*/
}
