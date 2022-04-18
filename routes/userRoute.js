const express=require('express');
const userControl=require('../controllers/authController');

const router=express.Router();

router.route('/signup').post(userControl.createUser);
router.route('/login').post(userControl.loginUser);
router.route('/logout').get(userControl.logoutUser);
router.route('/dashboard').get(userControl.dashboardUser);

module.exports=router;