import 'dart:convert';
import 'dart:io';
import 'constants.dart' as constants;
import 'package:http/http.dart' as http;

void main() {
  fetch2(someUrl) async {
    var client = HttpClient();
    try {
      HttpClientRequest request = await client.getUrl(Uri.parse(someUrl));
      request.headers.set(HttpHeaders.rangeHeader, 'bytes=0-19999');
      HttpClientResponse response = await request.close();

      print('HEAD ${response.reasonPhrase}\n${response.headers}');
    } finally {
      client.close();
    }
  }

  print('Starting...');
  fetch2(constants.uri3);
}
