const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funcSchema = new Schema({
    nome: { type: String },
    matricula: { type: String},
    email: {type: String},
    endereco: { type: String },
    dataNasc: { type: String},
    cargo: { type: String }   

    
})

const Funcionario = mongoose.model('Funcionario', funcSchema);

module.exports =  Funcionario;