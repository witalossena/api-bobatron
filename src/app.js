const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const db = require('./config/db');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

router(app)

app.listen(process.env.PORT || 3000, () => {
    console.log('listen on port 3000')
})