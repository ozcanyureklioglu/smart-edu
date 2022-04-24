const express=require('express');
const userControl=require('../controllers/authController');
const authMiddleware=require('../middlewares/authMiddlewares');
const { body, validationResult } = require('express-validator');

const router=express.Router();

router.route('/signup').post(userControl.createUser);
router.route('/login').post(userControl.loginUser);
router.route('/logout').get(userControl.logoutUser);
router.route('/dashboard').get(authMiddleware, userControl.dashboardUser);

module.exports=router;