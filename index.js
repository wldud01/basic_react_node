const express = require('express')
const app = express()
const port = 5000 // back server


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://yunjiyeong0106:kIU1rs19EloeQPym@firstmongo.6dthoaz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

