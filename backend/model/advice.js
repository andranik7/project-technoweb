// le schéma d'un user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adviceSchema = new Schema({
    proprietaire: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    text: String,

    date: {
        type: Date,
        default: new Date()
    }
});





const Advice = mongoose.model("Advice", adviceSchema);
exports.Advice = Advice;