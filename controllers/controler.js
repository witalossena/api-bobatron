
const User = require('../models/funcionarios')

exports.getUser = async(req, res) => {
    try {
        const users = await User.find({});
        if(users == 0)
            return res.status(400).send({ error: "nenhum usuario encontrado" })
        return res.status(200).send(users)   
    } catch (error) {
        return res.status(400).send({ error: 'falha na operação '+ error})  
    }
}
