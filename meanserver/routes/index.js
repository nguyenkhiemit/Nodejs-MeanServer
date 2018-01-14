var express = require('express');
var router = express.Router();

var app = require('../app.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hello word Test QUE!');
});

module.exports = router;
