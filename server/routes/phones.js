var express = require('express');
var router = express.Router();

var phone_controller = require('../controllers/phoneController');

/* GET phones listing. */
router.get('/', phone_controller.getAllPhones);

module.exports = router;
