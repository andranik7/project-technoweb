// Permet de se connecter à MongoDB
// Il charge le driver mongoose
const mongoose = require('mongoose');


const connect = function (callback) {
    mongoose.set("debug", true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    // mettre 2/2.12 or later dans mong atlas
    mongoose.connect("mongodb+srv://admin:admin@cluster0-xdnhk.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, " Connection error"));
    db.once("open", function () {
        // mongoose.connection.db.listCollections().toArray(function (err, names) {
        //     console.log(names); // [{ name: 'dbname.myCollection' }]
        // });
        console.log('Connexion à la base de données établie');
        callback();
    });
};

// création d'une Erreur

const processError = function (err, res, callback) {
    if (err) {
        res.json({
            success: false,
            error: {
                message: err.message
            }
        });
    } else {
        callback();
    }
};

module.exports.processError = processError;
module.exports.connect = connect;

