const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');

router.get('/admin', adminController.adminPage);
router.get('/profile', userController.profilePage);
router.get('/logout', userController.logout);
router.get('/login', userController.loginPage);
router.get('/signup', userController.signupPage);
router.get('/tag/:id', tagController.tagPage);
router.get('/tags', tagController.tagsPage);
router.get('/quiz/:id', quizController.quizPage);
router.get('/', mainController.homePage);

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;