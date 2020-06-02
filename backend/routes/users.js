var express = require('express');
var router = express.Router();
var User = require('../model/user').User



// route pour créer un compte
router.post('/register', (req, res) => {
  let newUser = req.body
  console.log(req.body)

  let u = new User();
  u.prenom = newUser.prenom;
  u.nom = newUser.nom;
  u.kind = newUser.kind;
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


// route pour se connecter
router.post('/login', (req, res) => {
  let credentials = req.body;
  User.findOne({ email: credentials.email }).exec((err, user) => {
    if (user) {
      // on vérifie si le mdp est correct maintenant
      if (user.validatePassword(credentials.password)) {
        res.json({
          success: true,
          user: user
        })
      } else {
        res.json({
          success: false,
          message: "Email ou mot de passe erroné"
        })
      }
    } else {
      res.json({
        success: false,
        message: "Email ou mot de passe erroné"
      })
    }
  })
})


// route pour changer le pdp

router.post('/resetPassword', (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {

    if (user) {
      // on vérifie si le mdp est correct maintenant
      if (user.validatePassword(req.body.password)) {
        user.resetPassword(req.body.newPassword);
        user.save((err, doc) => {
          if (!err) {
            res.json({
              success: true,
              message: "Le mot de passe a bien été modifié"
            })
          }
        })

      } else {
        res.json({
          success: false,
          message: "Email ou mot de passe erroné"
        })
      }
    } else {
      res.json({
        success: false,
        message: "Email ou mot de passe erroné"
      })
    }
  })
})



router.post('/updateProfile', (req, res) => {
  User.findById(req.body.userId).exec((err, user) => {

    if (user) {
      user.prenom = req.body.prenom
      user.nom = req.body.prenom
      user.email = req.body.email
      user.save((err, doc) => {
        if (!err) {
          res.json({
            success: true,
            user: doc
          })
        } else {
          res.json({
            success: false,
            message: "Erreur"
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: "User doesn't exist"
      })
    }
  })
})
module.exports = router;
