const User = require('../models/User');
const Category=require('../models/Category');
const Course=require('../models/Course');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { redirect } = require('express/lib/response');

exports.createUser = async (req, res) => {

  const user = await User.create(req.body);
  console.log(req.body.role);
  try {
    res.status(201).redirect('/');
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
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
            res.status(404).send('Password is wrong');
          }
        });
      } else {
        res.status(404).send('User is not found');
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
