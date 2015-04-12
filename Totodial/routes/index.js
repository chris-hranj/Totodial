var config = require('../config');
var path = require('path');
var express = require('express');
var router = express.Router();
var twilioClient = require('twilio')(config.accountSid, config.authToken);

/* GET home page. */
router.get('/', function(req, res) {
  // Place an outbound call to the user, using the TwiML instructions
    // from the /outbound route

    twilioClient.makeCall({
        to: "+1" + 6107616189,
        from: config.twilioNumber,
        applicationSid: config.applicationSid
    }, function(err, message) {
        if (err) {
        	console.log(err);
            res.status(500).send(err);
        } else {
            res.send({
                message: 'DICKS'
            });
        }
    });
});

// Return TwiML instuctions for the outbound call
router.post('/outbound', function(req, res) {
    res.set({
        'Content-Type':'text/xml'
    });
    res.sendFile(path.resolve(__dirname + '/../views/call.txt'));
});

module.exports = router;