var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/datamobil', require('./datamobil'));

module.exports = router;
