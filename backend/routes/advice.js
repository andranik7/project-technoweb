var express = require('express');
var router = express.Router();
var User = require('../model/user').User
var Advice = require('../model/advice').Advice


// route poour créer un conseil
router.post('/createAdvice', (req, res) => {
    try {

        let newAdvice = req.body;
        let a = new Advice()
        a.proprietaire = newAdvice.user._id;
        a.text = newAdvice.text;
        a.save((err, advice) => {
            if (!err) {
                res.json({
                    success: true,
                    advice: advice
                })
            } else {
                res.json({
                    success: false,
                    error: err
                })
            }
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
})


// route pour récupérer les conseils

router.get('/getAdvices', async (req, res) => {
    try {
        let advices = await Advice.find().populate('proprietaire').exec();
        res.json({
            success: true,
            advices
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
})

module.exports = router;
