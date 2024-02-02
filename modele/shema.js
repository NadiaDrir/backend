const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const userSchema =new Schema ({
    title:{
        type:String,
        required:true,
           
    },
  
   load:{
        type:Number,
        required:true,
       
    },
    Reps:{
        type:Number,
        required:true,
        
    }
    },{timestamps:true}
    )


    
    const Workout=mongoose.model('Workout',userSchema);
   
    module.exports =Workout

