var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.redirect('/datamobil/show')
})
router.use('/datamobil', require('./datamobil'));

module.exports = router;
