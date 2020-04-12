const express = require('express');
const router = express.Router();

// require controller
var character_controller = require('../controllers/characterController');

router.get('/', character_controller.character_list);

module.exports = router;
