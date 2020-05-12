var express = require('express');
var router = express.Router();
var User = require('../model/user').User
var Produit = require('../model/produit').Produit
var Troc = require('../model/troc').Troc;




// route pour créer un troc
router.post('/createTroc', (req, res) => {
    try {
        let newTroc = req.body;
        let t = new Troc();
        t.donneur = newTroc.donneur;
        t.destinataire = newTroc.destinataire;
        t.produitsEchanges = newTroc.produitsEchanges;
        t.save((err, troc) => {
            if (!err) {
                res.json({
                    success: true,
                    troc: troc
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


// router pour récupérer un troc par id
router.get('/getTroc/:trocId', (req, res) => {
    try {
        let trocId = req.params.trocId;
        Troc.findById(trocId).exec((err, troc) => {
            if (troc) {
                res.json({
                    success: true,
                    troc: troc
                })
            } else {
                res.json({
                    success: false,
                    message: "troc non trouvé"
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



router.get('/allTrocs', (req, res) => {
    try {
        Troc.find({}).exec((err, trocs) => {
            res.json({
                success: true,
                trocs: trocs
            })
        })
    } catch (e) {
        res.json({
            success: false,
            error: e
        })
    }
})

module.exports = router;
