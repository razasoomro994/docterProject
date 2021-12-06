//const express = require('express');
import express from 'express'
import cors from 'cors'
const app = express();
//const bodyParser = require('body-parser');
const PORT = 5000;
//const cors = require('cors');
 import user from './routes/user.js'
 import mongoose from 'mongoose'

// import config from '../backend/config/config.env'
import config from '../backend/config/DB.js'

// Config
//if (process.env.NODE_ENV !== "PRODUCTION") {
   // require("dotenv").config({ path: "backend/config/config.env" });
  // import config from '../backend/config/config.env'
  //}


 mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
  ()=>{console.log('Database is Connected')},
  err => {console.log('cen Not connect to the database'+err)}
);


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//app.use('/login',user)



app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });