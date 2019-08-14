const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateLoginInput = require('../validation/login');


const User = require('../models/User');

const magicNumber = 3600;

exports.loginCallback = (req, res) => {
  const {
    errors,
    isValid,
  } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email } = req.body;
  const { password } = req.body;

  User.findOne({
    email,
  })
    .then((user) => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
            };
            jwt.sign(payload, 'secret', {
              expiresIn: magicNumber,
            }, (err, token) => {
              if (err) console.error('There is some error in token', err);
              else {
                res.json({
                  success: true,
                  token: `Bearer ${token}`,
                });
              }
            });
          } else {
            console.log('incorrect password');
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        });
    });
};
