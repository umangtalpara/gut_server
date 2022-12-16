var express = require('express');
var router = express.Router();
const vnatk = require('vnatk-express-sequelize');

// Optional to use some auth middleware on this route
//router.use(require('./middleware/adminTokenChecker'));

const Models = require('../models');
module.exports = vnatk({ 
    Models: Models,
    router: router
});