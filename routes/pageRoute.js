const express=require('express');
const pageControl=require('../controllers/pageController');
const redirectMiddleware=require('../middlewares/redirectMiddlewares');

const router=express.Router();

router.route('/').get(pageControl.pageIndexControl);
router.route('/about').get(pageControl.pageAboutControl);
router.route('/register').get(redirectMiddleware,pageControl.pageRegisterControl);
router.route('/login').get(redirectMiddleware,pageControl.pageLoginControl);
router.route('/contact').get(pageControl.pageContactControl);
router.route('/contact').post(pageControl.sendContactControl);

module.exports=router;
