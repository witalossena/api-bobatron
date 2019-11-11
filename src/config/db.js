const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.DB_HOST,

   {
      useUnifiedTopology: true,
      useNewUrlParser: true
      
  });


