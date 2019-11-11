const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estoqSchema = new Schema({
    cod: { type: String },
    artista: { type: String},
    album: {type: String},
    quantidade: { type: String },
    valor: { type: String},    
})

const Estoque = mongoose.model('Estoque', estoqSchema);

module.exports =  Estoque;