const express=require('express');
const courseControl=require('../controllers/courseController');
const roleMiddle=require('../middlewares/roleMiddleware');

const router=express.Router();

router.route('/').post(roleMiddle(['Teacher','Admin']), courseControl.createCourse);
router.route('/').get(courseControl.getAllCourses);
router.route('/:slug').get(courseControl.getCourse);
router.route('/enroll').post(courseControl.enrollCourse);
router.route('/release').post(courseControl.releaseCourse);

module.exports=router;
