import 'header.dart';

class Tag {
  String field;
  num value;
  String legend;
  Tag(this.field, this.value, this.legend);
}

const ids = ['MPEG-II 2.5', 'XXX', 'MPEG-II', 'MPEG-I'];
const layers = ['XXX', 'Layer III', 'Layer II', 'Layer I'];
const modes = ['stereo', 'joint_stereo', 'dual_channel', 'single_channel'];
const emph = ['no emphasis', '50/15 microsec', 'reserved', 'CCITT J.17'];

extension Formatting on Header {
  String get detectId => badId ? 'Bad ID' : ids[id];
  String get detectLayer => badLayer ? 'Bad Layer' : layers[layer];
  String get detectMode => modes[mode] + (validateMode() ? ' +' : ' -');
  String get detectEmphasis => emph[emphasis];

  List<Tag> get hdrs {
    return [
      Tag('id', id, detectId),
      Tag('layer', layer, detectLayer),
      Tag('crc_bit', protec, protec == 1 ? 'Off' : 'On'),
//- - - - - - - - - - - - - - -
      Tag('bitrateIdx', btrIdx, 'C$btrCol $bitrate kBit/s'),
      Tag('sampling', samplIdx, ' Freq = $samplFreq'),
      Tag('padding_bit', padding, ''),
      Tag('flb', flb, 'NXT $iNext $bNext'),
      Tag('private_bit', private, '$private'),
//- - - - - - - - - - - - - - -
      Tag('mode', mode, detectMode),
      Tag('mode_extension', modeExt, detectExtMode()),
      Tag('copyright', copyright, ''),
      Tag('original', origHome, ''),
      Tag('emphasis', emphasis, detectEmphasis),
    ];
  }

  void druk() {
    print(""" 
- - - - - - - - - - - - -
OFFSET $frame $hexVal
- - - - - - - - - - - - -""");
    hdrs.forEach((el) => print("${el.field} = ${el.value} = ${el.legend}"));
  }
}
