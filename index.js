<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 5000; // back server

// MongoDB에서 user에 대한 정보를 가져오
const { User } = require("./models/User");
const bodyParser = require("body-parser");

// database 비밀 설정
const config = require('./config/key');
=======
const express = require('express')
const app = express()
const port = 5000 // back server


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://yunjiyeong0106:password@firstmongo.6dthoaz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
>>>>>>> 8e813d718aaf585637818103017d223722665a94


/** Database setting MongoDB */
const mongoose = require('mongoose')
mongoose.connect( config.mongoURI,{
  useNewUrlParser:true, useUnifiedTopology: true
}).then(()=>console.log("mongoDB start...."))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended:true})); // application x www form urlencoded
app.use(bodyParser.json()); // json code를 가져올 수 있게


app.get('/', (req, res) => {
  res.send('Hello World! 뭐야~')
});
//앤드포인트 register
app.post('/register', async (req,res)=>{
  //회원가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body); // 이 내무에 client 정보를 받아준다.
  const result = await user.save()
  console.log(result);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

