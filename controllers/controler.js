
const Funcionarios = require('../models/funcionarios')

exports.getFunc = async(req, res) => {
    try {
        const funcionarios = await Funcionarios.find();
        if(funcionarios == 0)
            return res.status(400).send({ mensagem: "nenhum funcionario encontrado" })
        return res.status(200).send(funcionarios)   
    } catch (error) {
        return res.status(400).send({ error: 'falha na operação '+ error})  
    }
}
exports.addFunc = async(req, res) => {
    try {
        const funcionarios = await Funcionarios.create({
            nome: req.body.nome, 
            matricula: req.body.matricula,
            email: req.body.email,
            endereco: req.body.endereco,
            dataNasc: req.body.dataNasc,
            cargo: req.body.cargo
        });
    return res.status(200).send(funcionarios)     
    } catch (error) {
        return res.status(400).send({ error: 'falha na operação ' + error })      
    }
}