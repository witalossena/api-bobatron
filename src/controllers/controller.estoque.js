
const Estoque = require('../models/estoque')

exports.getEstoque = async(req, res) => {
    try {
        const estoque = await Estoque.find();
        if(estoque == 0)
            return res.status(400).send({ mensagem: "nenhum produto cadastrado" })
        return res.status(200).send(estoque)   
    } catch (error) {
        return res.status(400).send({ error: 'falha na operação '+ error})  
    }
}
exports.addEstoque = async(req, res) => {
    try {
        const estoque = await Estoque.create({
            cod: req.body.cod, 
            artista: req.body.artista,
            album: req.body.album,
            quantidade: req.body.quantidade,
            valor: req.body.valor,
        });
    return res.status(200).send(estoque)     
    } catch (error) {
        return res.status(400).send({ error: 'falha na operação ' + error })      
    }
}

exports.getEstoById = async(req, res) => {
    try {
        const estoque = await Estoque.findById(req.params.id);
        return res.status(200).send(estoque)

        
    } catch (error) {   
        return res.status(400).send({ error: 'falha na operação ' + error })      
    }
}

exports.deleteEstoById = async(req, res) => {
    try {
        await Estoque.findByIdAndRemove(req.params.id);
        return res.status(200).send({ mensagem: 'removido com sucesso'})

        
    } catch (error) {
        return res.status(400).send({ error: 'falha na operação ' + error })             
    }
}