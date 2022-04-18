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





