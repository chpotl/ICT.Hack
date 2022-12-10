const express = require('express');
const authController = require('../controllers/authController');
const countryController = require('../controllers/countryController');

const router = express.Router();

router.get('/', countryController.getAll);
router.post('/', countryController.create);
module.exports = router;
