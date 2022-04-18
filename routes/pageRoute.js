const express=require('express');
const pageControl=require('../controllers/pageController');

const router=express.Router();

router.route('/').get(pageControl.pageIndexControl);
router.route('/about').get(pageControl.pageAboutControl);
router.route('/register').get(pageControl.pageRegisterControl);
router.route('/login').get(pageControl.pageLoginControl);

module.exports=router;
