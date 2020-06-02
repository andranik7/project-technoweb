// le schéma d'un user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto')

//function pour générer un salt de 128 octets
const genSalt = function () {
    return crypto.randomBytes(128).toString('base64')
}

const genHash = function (password, salt) {
    let hash = crypto.createHash('sha512')
    hash.update(salt)
    hash.update(password)
    return hash.digest('hex')
}

const userSchema = new Schema({
    prenom: String,
    nom: String,

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    kind: String,

    date: {
        type: Date,
        default: new Date()
    },
    salt: String
});


userSchema.pre('save', function (next) {
    if (this.isNew) {
        this.salt = genSalt()
        this.password = genHash(this.password, this.salt)
    }
    next()
})


userSchema.methods.resetPassword = function (password) {
    this.salt = genSalt()
    this.password = genHash(this.password, this.salt)
}


userSchema.methods.validatePassword = function (password) {
    if (this.password === genHash(password, this.salt)) {
        return true
    } else {
        return false
    }
}




const User = mongoose.model("User", userSchema);
exports.User = User;