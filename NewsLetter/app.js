var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

SubList = require('./models/sublist.js');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/newsletter', { useNewUrlParser: true });
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/newsletter ');
});


app.get('/api/newsletter', function(req, res){
	SubList.getSubList(function(err, submissions){
		if(err){
			throw err;
		}
		res.json(submissions);
	});
});

app.post('/api/newsletter', function(req, res){
	var submission = req.body;
	SubList.addSubmission(submission, function(err, submission){
		if(err){
			throw err;
		}
		res.json(submission);
	});
});

app.delete('/api/newsletter/:_id', function(req, res){
	var id = req.params._id

	SubList.removeSubmission(id, function(err, submission){
		if(err){
			throw err;
		}
		res.json(submission)
	});
});

app.listen(3000);
console.log('Running on port 3000...');
