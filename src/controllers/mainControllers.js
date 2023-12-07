const featuredProducts = require('../models/products.js');
const users = require('../models/users.js');

const mainControllers = {
    home: async (req, res) => { 
        const listProducts = await featuredProducts.getFeaturedProducts();
        const listLicenses = await featuredProducts.getFeaturedLicenses();

        res.render('index', {
            products: listProducts,
            licenses: listLicenses
        });
    },
    contact: (req, res) => res.render('index'),
    about: (req, res) => res.render('index'),
    faqs: (req, res) => res.render('index'),
    login: (req, res) => {
		res.render('login', {
			title: 'Login',
			error: req.query.error
		})
	},
    loginPost:  async (req, res) => {
        const {email, password}= req.body;
        console.log(email , password)
        const [validate]= await users.validateLogin(email, password);
        if(validate === undefined){
			res.redirect('/login/?error=1')
		} else {
			res.redirect(`/admin/admin/${validate.user_id}`)
		}
    
      }   ,
}

module.exports = mainControllers;