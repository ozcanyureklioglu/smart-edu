const Course = require('../models/Course');
const Category = require('../models/Category');
const User=require('../models/User');

exports.createCourse = async (req, res) => {
  const course = await Course.create({
    name:req.body.name,
    description:req.body.description,
    category:req.body.category,
    user:req.session.userID
  });

  try {
    res.status(201).redirect('/courses');
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const categerySlug = req.query.category;

    const category = await Category.findOne({ slug: categerySlug });

    let filter = {};
    if (categerySlug) {
      filter = {
        category: category._id,
      };
    }

    const courses = await Course.find(filter);
    const categories = await Category.find({});

    res.status(200).render('courses', {
      page_name: 'courses',
      courses,
      categories,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const user=await User.findById(req.session.userID);
    const course = await Course.findOne({ slug: req.params.slug }).populate('user');

    res.status(200).render('course', {
      page_name: 'courses',
      course,
      user
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};


exports.enrollCourse = async (req, res) => {
  try {
    const user=await User.findById(req.session.userID);
    await user.courses.push({_id:req.body.course_id});
    await user.save();


  
    
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};

exports.releaseCourse = async (req, res) => {

  try {
  const user=await User.findById(req.session.userID);
  await user.courses.pull({_id:req.body.course_id});
  await user.save();



  
  res.status(200).redirect('/users/dashboard');
} catch (error) {
  res.status(400).json({
    status: 'failed',
    error,
  });
}
};

