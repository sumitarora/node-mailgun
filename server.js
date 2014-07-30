var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.use(bodyParser());

var port     = process.env.PORT || 8080;

var mongoose   = require('mongoose');
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

var email     = require('./app/rest/email');

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/send', email.send);
router.post('/hook', email.hook);

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
