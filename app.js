var config = require("dotenv");
config.config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');
var orderRouter = require('./routes/order');
var VnatkRouter = require('./routes/vnatk.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// add cors is a good way and mostly you might need this also
app.use(cors()); // Use this after the variable declaration

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter); 
app.use('/api/orders', orderRouter);
app.use('/api/vnatk', VnatkRouter);

module.exports = app;
