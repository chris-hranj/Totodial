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