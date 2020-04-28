var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body.params)
  res.json({
    success: true,
    message: "Bravo votre requête a marché"
  })
});

module.exports = router;
