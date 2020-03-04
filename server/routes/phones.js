var express = require('express');
var router = express.Router();

var phone_controller = require('../controllers/phoneController');

router.get('/', phone_controller.getAllPhones);
router.get('/:id', phone_controller.getOnePhone);

module.exports = router;
