
const FuncController = require('../controllers/controler')
const EstoqController = require('../controllers/controller.estoque')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('rotas /estoque /funcionarios')
    })
    app.get('/funcionarios', FuncController.getFunc)  
    app.get('/estoque', EstoqController.getEstoque )
    app.post('/novo-funcionario', FuncController.addFunc) 
    app.post('/adiciona-estoque', EstoqController.addEstoque)  

}


