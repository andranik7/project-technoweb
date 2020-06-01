var express = require('express');
var router = express.Router();
var User = require('../model/user').User
var Produit = require('../model/produit').Produit


// route poour créer un produit
router.post('/createProduct', (req, res) => {
    try {

        let newProduct = req.body;
        let p = new Produit()
        p.proprietaire = newProduct.userId;
        p.titre = newProduct.titre;
        p.description = newProduct.description;
        p.prix = parseFloat(newProduct.prix);
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

// route pour récupérer un produit par son id
router.get('/getProduct/:produitId', (req, res) => {
    try {
        let produitId = req.params.produitId;
        Produit.findById(produitId).exec((err, produit) => {
            if (produit) {
                res.json({
                    success: true,
                    produit: produit
                })
            } else {
                res.json({
                    success: false,
                    message: "le produit est introuvable"
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

// route pour obtenir tous les produits
router.get('/allProducts', (req, res) => {
    try {
        Produit.find({}).populate('proprietaire').exec((err, produits) => {
            res.json({
                success: true,
                produits: produits
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
