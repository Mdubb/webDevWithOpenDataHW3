var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
	console.log("Ice Cream is LIVE on port 3000.");

app.get('/', function(request, response) {
  response.render('pages/index')
});

});