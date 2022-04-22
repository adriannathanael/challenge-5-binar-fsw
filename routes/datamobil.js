var express = require('express');
var router = express.Router();
const DataMobilController = require('../controller/datamobil')


router.post('/register', DataMobilController.addMobil);
router.get("/show", DataMobilController.getAllMobil);
router.put("/updatemobil", DataMobilController.updateMobil);
router.delete("/deletemobil", DataMobilController.deleteMobil);


module.exports = router;
