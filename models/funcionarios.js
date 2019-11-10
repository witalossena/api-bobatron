const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funcSchema = new Schema({
    nome: { type: String }   
    
})

const User = mongoose.model('User', funcSchema);

module.exports =  User;