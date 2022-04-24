const User = require('../models/User');
const Category=require('../models/Category');
const Course=require('../models/Course');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { redirect } = require('express/lib/response');
const { validationResult } = require('express-validator');

exports.createUser = async (req, res) => {

  
  
  try {
    const user = await User.create(req.body);
    req.flash("success", "Register is succesfully");
    res.status(201).redirect('/login');
    
  } catch (error) {

    req.flash("error", "Something happened");
    res.status(400).redirect('/register');


  }
};

exports.loginUser = (req, res) => {
  try {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            req.session.userID = user._id;
            res.status(200).redirect('/users/dashboard');
          } else {
            req.flash("wpass", "Password is wrong");
            res.status(400).redirect('/login');
          }
        });
      } else {
        req.flash("nouser", "User is not found");
        res.status(404).redirect('/login');
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};

exports.logoutUser = async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.dashboardUser = async (req, res) => {

  const user =await User.findOne({_id:userID}).populate('courses');
  const category=await Category.find();
  const courses=await Course.find({user:req.session.userID});
  

  res.render('dashboard', {
    page_name:"dashboard",
    user,
    category,
    courses
  });
};
