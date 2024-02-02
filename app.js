
const express =require('express');
const router=require('./route/route.js');
const mongoose =require('mongoose')
const cors = require('cors')
const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())


const dbURL = 'mongodb+srv://nadianadia:Abidabid@cluster0.xwwdi3o.mongodb.net/'
mongoose.connect(dbURL)
   .then((result)=>{
      app.listen(4000)
      console.log('connected')})
   .catch((err)=>console.log(err));




app.use('/api/workouts',router);





