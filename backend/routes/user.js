const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const login = require('../controls/login_callback');
const register = require('../controls/register_callback');



const User = require('../models/User');

const magicNumber = 3600;

router.post('/register', register.registerCallback);

router.post('/login', login.loginCallback);

router.get('/me', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;
