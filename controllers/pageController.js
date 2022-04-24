const nodemailer=require('nodemailer');


exports.pageIndexControl = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.pageAboutControl = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.pageRegisterControl = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.pageLoginControl = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.pageContactControl = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendContactControl = (req, res) => {

  const mail=`
    <h1>Mail Detail</h1>
    <ul>
    <li>Name: ${req.name}</li>
    <li>Mail: ${req.mail} </li>
    </ul>
    <h1>Message</h1>
    <p>${req.message} </p>
  
  `;
  req.flash("success", "We Received your message succesfully");
  res.status(200).redirect('/contact');

};





