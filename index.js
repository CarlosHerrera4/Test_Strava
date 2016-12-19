const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000 ;

app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(bodyParser.json())

const strava = require('strava-v3');

app.get('/actividad', (req, res) => {
	strava.activities.get({
		// Id & Access_token
	}, function(err, payload) {
		//console.log(payload)
		//console.log(err)
		//console.log('Venga va');
		res.status(200).send(payload)
		//res.send(200, payload)
	});
})

app.listen(port, function() {
	console.log(`API REST corriendo en http://localhost:${port}`)

});
