const express=require('express');
const pageControl=require('../controllers/pageController');

const router=express.Router();

router.route('/').get(pageControl.pageIndexControl);
router.route('/about').get(pageControl.pageAboutControl);

module.exports=router;
