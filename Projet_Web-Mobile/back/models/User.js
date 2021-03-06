// La structure de l'enregistrement en Bdd
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    idSteam: String
});

module.exports = mongoose.model('User', userSchema);
