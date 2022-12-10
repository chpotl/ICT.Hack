const express = require('express');
const authController = require('../controllers/authController');
const tagController = require('../controllers/tagController');

const router = express.Router();

router.get('/', tagController.getAll);
module.exports = router;
