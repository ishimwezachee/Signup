const express = require('express');
const router = express.Router();
const userController  = require('../controllers/UserControllers');


router.post('/signup', userController.signup);

module.exports = router;