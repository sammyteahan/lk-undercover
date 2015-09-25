var express         = require('express')
	exphbs            = require('express-handlebars')
	route             = express.Router()
	indexRoute        = require('./routes/index.js')
  teamRoute         = require('./routes/team.js')
  workRoute         = require('./routes/work.js')
  githubRoute       = require('./routes/github.js')
  productsRoute     = require('./routes/products.js');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('static'));

app.use('/', indexRoute);
app.use('/team', teamRoute);
app.use('/work', workRoute);
app.use('/github', githubRoute);
app.use('/products', productsRoute);

var server = app.listen(3000, function () {
	console.log('Listening on port 3000');
});