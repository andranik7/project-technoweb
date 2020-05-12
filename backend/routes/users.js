var express = require('express');
var router = express.Router();
var User = require('../model/user').User




router.post('/register', (req, res) => {
  let newUser = req.body
  console.log(req.body)
  let u = new User();
  u.name = newUser.name;
  u.email = newUser.email;
  u.password = newUser.password;
  u.save((err, user) => {
    if (!err) {
      res.json({
        success: true,
        user: user
      })
    } else {
      res.json({
        success: false,
        message: err
      })
    }
  })

})

module.exports = router;
