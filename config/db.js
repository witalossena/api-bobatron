require('dotenv').config();

const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.DB_HOST, { useUnifiedTopology: true, useNewUrlParser: true }).
  catch(error => console.log(error));

