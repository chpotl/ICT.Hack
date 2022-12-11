const express = require('express');
const trendController = require('../controllers/trendController');

const router = express.Router();

router.get('/tag', trendController.getTagtrendIndex);
module.exports = router;
