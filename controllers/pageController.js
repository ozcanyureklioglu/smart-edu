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





