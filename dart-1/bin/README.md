# Dart implementation of MP3 partial decoder

## Intension

This code intention is to assure Dart can be efficiently used to real life task. 

Especially questionable topic is effecient hex/binary data processing. 

## The imaginary task is the following. 

- We have MP3 file big enough, as a 60 page book.
- File consists of "floating" blocks, as MP3 does.
- We do not care of meta headers, as ID2/3, LAME etc.
- We have range(s) in meaning of time, i.e. tracks.
- We need to convert time ranges to block ranges, and then.. 
-   ..to byte ranges in file
- Finally we are going to make Range request to web server 