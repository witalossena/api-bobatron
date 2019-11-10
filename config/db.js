const mongoose = require('mongoose')

mongoose.connect(process.env.DB_HOST,

   {
      useUnifiedTopology: true,
      useNewUrlParser: true
      
  });


