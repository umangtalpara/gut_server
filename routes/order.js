var express = require('express');
var router = express.Router();
var {orders} = require("../models");
// var Sequelize = require("sequelize") 
// const Order = require('../models/order');

router.get('/', function(req, res, next) {
  res.send('order');
});
router.post('/find', async (req, res, next) => {
  await orders.findOne({ where:req.body }).then((data) => {
    res.json(data);
  });
});
router.post('/update', async (req, res, next) => {
  await orders.update(
    req.body
  ,{ where:req.body.id }).then((data) => {
    res.json(data);
  });
});

module.exports = router;
