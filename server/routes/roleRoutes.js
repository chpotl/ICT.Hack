const express = require('express');
const authController = require('../controllers/authController');
const roleController = require('../controllers/roleController');

const router = express.Router();

router.get('/', roleController.getAll);
router.post('/', roleController.create);
module.exports = router;
