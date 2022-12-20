const express = require('express');
const authController = require('../controllers/authController');
const projectController = require('../controllers/projectController');
const upload = require('../utils/upload');

const router = express.Router();

router.get('/', projectController.getAll);
router.get('/:projectId', projectController.getById);
router.use(authController.protect);
router.post(
  '/',
  upload.fields([
    { name: 'coverUrl', maxCount: 1 },
    { name: 'screenShotsUrl', maxCount: 6 },
  ]),
  projectController.create
);
module.exports = router;
