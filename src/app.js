const express = require('express');
const cors = require('cors');
const route = require('../routes/routes')
require('dotenv').config()




const app = express()

app.use(cors())
route(app)


app.listen(process.env.PORT, () => {
    console.log('listen on port 3000')
})