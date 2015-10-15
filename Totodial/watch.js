var fs = require ('fs');
var twilioClient = require('twilio');
var request = require('request');

fs.watch('./views/call.txt', function (event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    console.log('filename provided: ' + filename);
  } else {
    console.log('filename not provided');
  }

  request.get('http://11d29e76.ngrok.com', function(err, message) {
        if (err) {
        	console.log(err);
        }
        console.log(message);
    });
});

function convert_hex (input) {
  switch(input) {
      case '7F':
          return ' ';
          break;
      case '80':
          return 'A';
          break;
      case '81':
          return 'B';
          break;
      case '82':
          return 'C';
          break;
      case '83':
          return 'D';
          break;
      case '84':
          return 'E';
          break;
      case '85':
          return 'F';
          break;
      case '86':
          return 'G';
          break;
      case '87':
          return 'H';
          break;
      case '88':
          return 'I';
          break;
      case '89':
          return 'J';
          break;
      case '8A':
          return 'K';
          break;
      case '8B':
          return 'L';
          break;
      case '8C':
          return 'M';
          break;
      case '8D':
          return 'N';
          break;
      case '8E':
          return 'O';
          break;
      case '8F':
          return 'P';
          break;
      case '90':
          return 'Q';
          break;
      case '91':
          return 'R';
          break;
      case '92':
          return 'S';
          break;
      case '93':
          return 'T';
          break;
      case '94':
          return 'U';
          break;
      case '95':
          return 'V';
          break;
      case '96':
          return 'W';
          break;
      case '97':
          return 'X';
          break;
      case '98':
          return 'Y';
          break;
      case '99':
          return 'Z';
          break;
      case 'A0':
          return 'a';
          break;
      case 'A1':
          return 'b';
          break;
      case 'A2':
          return 'c';
          break;
      case 'A3':
          return 'd';
          break;
      case 'A4':
          return 'e';
          break;
      case 'A5':
          return 'f';
          break;
      case 'A6':
          return 'g';
          break;
      case 'A7':
          return 'h';
          break;
      case 'A8':
          return 'i';
          break;
      case 'A9':
          return 'j';
          break;
      case 'AA':
          return 'k';
          break;
      case 'AB':
          return 'l';
          break;
      case 'AC':
          return 'm';
          break;
      case 'AD':
          return 'n';
          break;
      case 'AE':
          return 'o';
          break;
      case 'AF':
          return 'p';
          break;
      case 'B0':
          return 'q';
          break;
      case 'B1':
          return 'r';
          break;
      case 'B2':
          return 's';
          break;
      case 'B3':
          return 't';
          break;
      case 'B4':
          return 'u';
          break;
      case 'B5':
          return 'v';
          break;
      case 'B6':
          return 'w';
          break;
      case 'B7':
          return 'x';
          break;
      case 'B8':
          return 'y';
          break;
      case 'B9':
          return 'z';
          break;
      case 'F6':
          return '0';
          break;
      case 'B9':
          return '1';
          break;
      case 'B9':
          return '2';
          break;
      case 'B9':
          return '3';
          break;
      case 'B9':
          return '4';
          break;
      case 'B9':
          return '5';
          break;
      case 'B9':
          return '6';
          break;
      case 'B9':
          return '7';
          break;
      case 'B9':
          return '8';
          break;
      case 'B9':
          return '9';
          break;
      default:
          return '';
  }
}