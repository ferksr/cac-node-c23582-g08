const mainControllers = {
    home: (req, res) => res.render('index'),
    contact: (req, res) => res.render('contact'),
    about: (req, res) => res.render('about'),
    faqs: (req, res) => res.render('faqs'),
}

module.exports = mainControllers;