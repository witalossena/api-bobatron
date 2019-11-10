require('dotenv').config();

const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://deploy:Ww81697895@cluster0-shard-00-00-jmhfk.mongodb.net:27017,cluster0-shard-00-01-jmhfk.mongodb.net:27017,cluster0-shard-00-02-jmhfk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',

   {
      useUnifiedTopology: true,
      useNewUrlParser: true
      
  });


