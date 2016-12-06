const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000 ;

app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(bodyParser.json())

const strava = require('strava-v3');

// strava.athlete.listRoutes({
// 	"id":"8519415",
// 	"access_token": "4005e5f9913ce8fcdf45ec1cb3a5b383f23c6ef"
//
// }, function(err, payload) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(payload);
// 	}
// 	console.log('Venga va');
//
// });

app.get('/actividad', (req, res) => {
	strava.activities.get({
		"id":"8519415",
		"access_token": "4005e5f9913ce8fcdf45ec1cb3a5b383f23c6ef3"
	}, function(err, payload) {
		console.log(payload)
		//console.log(err)
		//console.log('Venga va');
		res.send(200, payload)
	});
})

app.listen(port, function() {
	strava.activities.get({
		"id":"8519415",
		"access_token": "4005e5f9913ce8fcdf45ec1cb3a5b383f23c6ef3"
	}, function(err, payload) {
		console.log(payload)
		console.log(err)
		// if (err) {
		// 	console.log(err);
		// } else {
		// 	console.log(payload);
		// }
		console.log('Venga va');
	});
	console.log("oleeeee")
});
