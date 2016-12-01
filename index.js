const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000 ;

var strava = require('strava-v3');

strava.athlete.listRoutes({
	"id":"",
	"access_token": "",

}, function(err, payload) {
	if (err) {
		console.log(err);
	} else {
		console.log(payload);
	}
	console.log('Venga va');

});

app.listen(port, function() {
	strava.activities.get({
		"id":"",
		"access_token": ""
	}, function(err, payload) {
		if (err) {
			console.log(err);
		} else {
			console.log(payload);
		}
		console.log('Venga va');
	});
});