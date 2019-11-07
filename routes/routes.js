

module.exports = function router(app){
    app.get('/', (req, res) => {
        res.send('index page')
    })
    app.get('/funcionarios', (req, res) => {
        res.send('funcionario page')
    })
}

