const User = require('../models/User');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { redirect } = require('express/lib/response');

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);

  try {
    res.status(201).render('/',{
      page_name:'dashboard',
      
    });
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

  const user =await User.findOne({_id:userID});

  res.render('dashboard', {
    page_name:"dashboard",
    user
  });
};
