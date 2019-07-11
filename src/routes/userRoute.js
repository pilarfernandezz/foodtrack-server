const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
router.get('/login',controller.getLogin);
router.get('/register',controller.getRegister);
router.get('/logout',controller.getLogout);
router.get('/userExists',controller.userExists);
module.exports = router;