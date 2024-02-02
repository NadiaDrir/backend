const express =require ('express');
const router =express.Router();
const Workout=require('../modele/shema')
const{get_workout }=require('../controleur/script');
const {post_workout} = require('../controleur/script');
const{delete_workout}=require('../controleur/script')



router.get('/',get_workout);
router.post('/',post_workout);
router.delete('/:id',delete_workout);

module.exports= router;