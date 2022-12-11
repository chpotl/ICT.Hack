const express = require('express');
const authController = require('../controllers/authController');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/', projectController.getAll);
router.get('/:projectId', projectController.getById);
router.use(authController.protect);
router.post('/', projectController.create);
module.exports = router;
