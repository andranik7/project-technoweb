// le schéma d'un user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    proprietaire: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    nom: String,

    caracteristiques: [],

    date: {
        type: Date,
        default: new Date()
    },
    salt: String
});





const Produit = mongoose.model("Produit", produitSchema);
exports.Produit = Produit;