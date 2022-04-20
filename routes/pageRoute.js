const express=require('express');
const pageControl=require('../controllers/pageController');
const redirectMiddleware=require('../middlewares/redirectMiddlewares');

const router=express.Router();

router.route('/').get(pageControl.pageIndexControl);
router.route('/about').get(pageControl.pageAboutControl);
router.route('/register').get(redirectMiddleware,pageControl.pageRegisterControl);
router.route('/login').get(redirectMiddleware,pageControl.pageLoginControl);

module.exports=router;
