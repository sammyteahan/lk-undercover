var express 	= require('express')
	exphbs		= require('express-handlebars')
	router 		= express.Router()
	indexRoute 	= require('./routes/index.js');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('static'));

app.use('/', indexRoute);


var server = app.listen(3000, function () {
	console.log('Listening on port 3000');
});