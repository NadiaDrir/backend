
const express =require('express');
const router=require('./route/route.js');
const mongoose =require('mongoose')
const cors = require('cors')
const app=express();
const env=require('dotenv').config();

const corsOptions={
   origin:process.env.FRONTEND_URL,
}
console.log(process.env.FRONTEND_URL)

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());





const dbURL = process.env.DB_URL
mongoose.connect(dbURL)
   .then((result)=>{
      app.listen(process.env.PORT||4000)
      console.log('connected')})
   .catch((err)=>console.log(err));




app.use('/api/workouts',router);





