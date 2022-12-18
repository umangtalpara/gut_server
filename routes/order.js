var express = require('express');
var router = express.Router();
var {Order} = require("../models");
// var Sequelize = require("sequelize") 
// const Order = require('../models/order');
var request = require("request-promise");

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
  console.log("helloo",req.body)
  
  let dataObj = {
    key: 'urc0JbK3FsaR0vfk9pjPiPb1vSMBNzL',
    action: 'add',
    service: req.body.service,
    link: req.body.url,
    quantity: req.body.quantity
  }
  const rpcData = {
    uri: "https://aladinseo.co.in/api/v1",
    method: "POST",
    body: dataObj,
    json: true,
  };
  let updateRecord = await request(rpcData);
  console.log("updateRecord",updateRecord);
  req.body.response_form_third_party = updateRecord
 
  //update after api hit
  await Order.update(
    req.body
  ,{ where:{
    id:req.body.id
  } }).then((data) => {
    res.json(data);
  });

});

module.exports = router;
