const express = require('express');

const router = express.Router();
const passport = require('passport');
const login = require('../controls/login_callback');
const register = require('../controls/register_callback');


router.post('/register', register.registerCallback);

router.post('/login', login.loginCallback);

router.get('/me', passport.authenticate('jwt', {
  session: false,
}), (req, res) => (
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  })
));

module.exports = router;
