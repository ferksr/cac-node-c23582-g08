const adminControllers = {
  admin: (req, res) => res.render('admin'),
  create: (req, res) => res.render('create'),
  edit: (req, res) => res.render('edit'),
  login: (req, res) => res.render('login'),
  register: (req, res) => res.render('register'),
}

module.exports = adminControllers;