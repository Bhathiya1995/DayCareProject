const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

// import controllers
const ctrlParent = require('../controllers/parent.controller')


// Connect database 

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://bhathiya:rom123456@daycare-mwzvz.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   if(err){
//       console.log("Error " + err);
//   }else{
//       console.log("Mongod Db connected");
//   }

// const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const uri = "mongodb+srv://bhathiya:rom123456@daycare-mwzvz.mongodb.net/DayCare?authSource=admin&replicaSet=DayCare-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const uri = "mongodb+srv://piyumali:piyumali123456@daycare-r25si.mongodb.net/DayCare?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(uri, (err)=>{
    if (err) {
        console.error("Error! " + err);
    }else{
        console.log("Mongo db Connected Successfully !!")
    }
});
  
// });
// Routings
router.post('/register', ctrlParent.register);
router.post('/login', ctrlParent.login);


module.exports =router;

