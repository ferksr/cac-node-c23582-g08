const products = require('../models/products.js');
const user = require('../models/users.js');

const adminControllers = {
  admin:  async (req, res) => {     
    const product= req.params.id;
     const item_detail = await products.getProductsById(product); 
     const items = await products.getProducts();  
     console.log(item_detail)   
     res.render('admin', {
         item : item_detail,
         list: items
   } )} ,
  create: (req, res) => res.render('create'),
  edit: (req, res) => res.render('edit'),
  register: async (req, res) => {
		res.render('register', {
			title: 'Register',
			error: req.query.error
		})
	},
  registerPost: async (req, res) =>{
    const {name, lastname, email, password}= req.body;
    const [create]  = await user.createUser(name, lastname, email, password);
    res.redirect('admin/login');
    console.log(create);
  },
}

module.exports = adminControllers;