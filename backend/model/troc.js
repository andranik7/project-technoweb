// le schéma d'un user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trocSchema = new Schema({
    donneur: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },


    destinataire: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    produitsEchanges: [{
        type: Schema.Types.ObjectId,
        ref: 'Produit'
    }],

    date: {
        type: Date,
        default: new Date()
    }
});





const User = mongoose.model("Troc", trocSchema);
exports.User = User;