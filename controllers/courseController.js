const courses = require('../models/Course');

exports.createCourse = async (req, res) => {
   
  const course = await courses.create(req.body);
  
  try {
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};
