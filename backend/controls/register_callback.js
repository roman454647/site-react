const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('../validation/register');

const User = require('../models/User');

exports.registerCallback = (req, res) =>{

const {
   errors,
   isValid
 } = validateRegisterInput(req.body);

 if (!isValid) {
   return res.status(400).json(errors);
 }
 User.findOne({
   email: req.body.email
 }).then(user => {
   if (user) {
     return res.status(400).json({
       email: 'Email already exists'
     });
   } else {
     const avatar = gravatar.url(req.body.email, {
       s: '200',
       r: 'pg',
       d: 'mm'
     });
     const newUser = new User({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       avatar
     });

     bcrypt.genSalt(10, (err, salt) => {
       if (err) console.error('There was an error', err);
       else {
         bcrypt.hash(newUser.password, salt, (err, hash) => {
           if (err) console.error('There was an error', err);
           else {
             newUser.password = hash;
             newUser
               .save()
               .then(user => {
                 res.json(user)
               });
           }
         });
       }
     });
   }
 });
}
