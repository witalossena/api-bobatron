
const FuncController = require('../controllers/controler')
const EstoqController = require('../controllers/controller.estoque')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('rotas /estoque /funcionarios')
    })
    app.get('/funcionarios', FuncController.getFunc)  
    app.post('/novo-funcionario', FuncController.addFunc) 
    app.get('/funcionario/:id', FuncController.getFuncById)
    app.delete('/funcionario/:id', FuncController.deleteById)

    app.get('/estoque', EstoqController.getEstoque )
    app.post('/adiciona-estoque', EstoqController.addEstoque)  
    app.get('/estoque/:id', EstoqController.getEstoById)
    app.delete('/estoque/:id', EstoqController.deleteEstoById)

}


