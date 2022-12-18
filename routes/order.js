var express = require('express');
var router = express.Router();
var {Order} = require("../models");
// var Sequelize = require("sequelize") 
// const Order = require('../models/order');

router.get('/', function(req, res, next) {
  res.send('order');
});
router.post('/create', async (req, res, next) => {
  await Order.create(req.body).then((data) => {
    res.json(data);
  });
});
router.post('/find', async (req, res, next) => {
  await Order.findAll({ where:req.body }).then((data) => {
    res.json(data);
  });
});
router.post('/update', async (req, res, next) => {
  await Order.update(
    req.body
  ,{ where:req.body.id }).then((data) => {
    res.json(data);
  });
});

module.exports = router;
