const express=require('express');
const categoryControl=require('../controllers/categoryController');

const router=express.Router();

router.route('/').post(categoryControl.createCategory);


module.exports=router;
