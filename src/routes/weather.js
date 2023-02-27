var express = require('express');
var router = express.Router();
//Here we create a variable for the weather controller
const weatherController = require('../controllers/weatherController.js');

//This will call the weather controller as a function rather than hard coding the data here
router.get('/', function (req, res) {
  weatherController.current_weather(req, res);
});

module.exports = router;