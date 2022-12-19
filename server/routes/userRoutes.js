const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/username/:username', userController.getUser);

router.use(authController.protect);
router.get('/logout', authController.logout);
router.get('/me', userController.getMe);
router.patch('/updateMe', userController.updateMe);
router.post('/addFav', userController.addFavorite);
router.post('/removeFav', userController.removeFavorite);
module.exports = router;
