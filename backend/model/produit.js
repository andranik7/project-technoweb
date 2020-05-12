// le schéma d'un user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    proprietaire: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    nom: String,

    caracteristiques: String,

    date: {
        type: Date,
        default: new Date()
    }
});





const Produit = mongoose.model("Produit", produitSchema);
exports.Produit = Produit;