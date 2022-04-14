const express=require('express');
const courseControl=require('../controllers/courseController');

const router=express.Router();

router.route('/').post(courseControl.createCourse);

module.exports=router;
