var express = require('express');
var app = express();
var path = require('path');



app.set('port', 3000);

//introducing some middelware

app.use(express.static(path.join(__dirname, 'public')));


/*
// sending the HTML homepage with .sendFile path.join, and the actually directory  of the application

app.get('/', function(req, res){
	console.log("Get the homepage");
	res
	.status(200)
	.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

// sending the HTML status code with .Json, ,true

app.get('/json', function(req, res){
	console.log("Get the json");
	res
	.status(200)
	.json({"jsonData" : true});
});

// sending the HTML status code with .sendFile, ,join

app.get('/file', function(req, res){
	console.log("Get the file");
	res
	.status(200)
	.sendFile(path.join(__dirname, 'app.js'));
});

//

var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
	console.log('Magic happens on the port' + app.get('port'));
});
