const express=require('express');
const courseControl=require('../controllers/courseController');

const router=express.Router();

router.route('/').post(courseControl.createCourse);
router.route('/').get(courseControl.getAllCourses);
router.route('/:slug').get(courseControl.getCourse);

module.exports=router;
