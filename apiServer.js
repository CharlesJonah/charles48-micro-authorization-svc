var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var apiRoutes = express.Router();
var authentication = require('./server/controllers/authentication')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Create a new users
apiRoutes.post('/register', function (req, res) {
    authentication.register(req.body, res);
});
//Login a new user
apiRoutes.post('/login', function (req, res) {
    authentication.login(req.body, res);
});

app.get('*', (req, res) => {
    res.status(200).send({ message: 'The server is running.' })
});

app.use('/api/v1', apiRoutes);

module.exports = app;
