const User = require('../models/User');

/*
module.exports = (roles) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(404).send('YOUR CANT ENTRY HERE');
    }
  };
};
*/
module.exports = (roles) => {
  return (req, res, next) => {
  User.findById(req.session.userID, (err, user) => {
    if (user && roles.includes(user.role)) {
      next();
    }else{
      res.status(404).send('YOUR CANT ENTRY HERE');
    }
  
    
  });
};
};


