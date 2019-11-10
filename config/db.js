const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://deploy:Ww81697895@cluster0-jmhfk.mongodb.net/test?retryWrites=true&w=majority',
//  { useNewUrlParser: true, useUnifiedTopology: true });



 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://deploy:Ww81697895@cluster0-jmhfk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
