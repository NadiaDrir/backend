const Workout = require('../modele/shema')


function get_workout(req,res){
   
    Workout.find()
    .then((result)=>{
        console.log(result)
        res.json({workout:result})
    })
    .catch((err)=>{
        res.status(400).json('Erreur:'+err)
    }) 
};




function post_workout(req,res){
    const workout=new Workout(req.body);
    workout.save()
    .then((result)=>{
        res.status(200).json({message:'workout add'})
    }).catch((err)=>{
        console.log(err);
    })
}

function delete_workout(req,res){
    const id=req.params.id
    Workout.findByIdAndDelete(id)
    .then((result)=>{
     res.json({})
    }).catch((err)=>{
     console.log(err);
 });
}

module.exports={get_workout, post_workout,delete_workout}