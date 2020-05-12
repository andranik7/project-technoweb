var express = require('express');
var router = express.Router();
var User = require('../model/user').User
var Produit = require('../model/produit').Produit


// route poour créer un produit
router.post('/createProduct', (req, res) => {
    try {
        console.log(req.body)
        let newProduct = req.body;
        let p = new Produit()
        p.proprietaire = newProduct.proprietaire;
        p.nom = newProduct.nom;
        p.caracteristiques = newProduct.caracteristiques;
        p.save((err, produit) => {
            if (!err) {
                res.json({
                    success: true,
                    produit: produit
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

module.exports = router;
