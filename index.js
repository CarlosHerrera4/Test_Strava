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