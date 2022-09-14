import "dart:io";
import 'header.dart';

class Tag {
  String field;
  num value;
  String legend;
  Tag(this.field, this.value, this.legend);
}

const modes = ['stereo', 'joint_stereo', 'dual_channel', 'single_channel'];
const emph = ['no emphasis', '50/15 microsec', 'reserved', 'CCITT J.17'];

extension Formatting on Header {
  String get detectMode => modes[hMode] + (validateMode() ? ' +' : ' -');
  String get detectEmphasis => emph[hEmphasis];

  List<Tag> get hdrs {
    return [
      Tag('id', hId, "means $cfVersion"),
      Tag('layer', hLayer, "means $cfLayer"),
      Tag('crc_bit', hProtec, cfCrc16 ? 'means On' : 'means Off'),
      Tag('samples', cfSamples, 'looked up, means samples PER frame'),
//- - - - - - - - - - - - - - -
      Tag('bitrateIdx', hBtrIdx, '$cfBitrate kBit/s'),
      Tag('sampling', hSamplIdx, ' Freq = $cfSamples'),
      Tag('padding_bit', hPadding, ''),
      Tag('flb', cfFrameLength, 'NXT $iNext $bNext'),
      Tag('private_bit', hPrivate, '$hPrivate'),
//- - - - - - - - - - - - - - -
      Tag('mode', hMode, detectMode),
      Tag('mode_extension', hModeExt, detectExtMode()),
      Tag('copyright', hCopyright, ''),
      Tag('original', hOrigHome, ''),
      Tag('emphasis', hEmphasis, detectEmphasis),
    ];
  }

  void druk() {
    print(""" 
- - - - - - - - - - - - -
OFFSET $frame $hexVal
- - - - - - - - - - - - -""");
    for (var el in hdrs) {
      stdout.write("${el.field} = ${el.value} = ${el.legend} | ");
    }
    print("");
  }
}
