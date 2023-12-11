const products = require('../models/products.js');

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
   createProduct: async (req, res) => {
    const productData = req.body;
    try {
        await products.createProduct(productData);
        res.redirect(`/admin/admin/${req.session.userId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('There was an error adding the product');
    }
},
  create: (req, res) => res.render('create'),
  edit: (req, res) => res.render('edit'),
  register: (req, res) => res.render('register'),
  
}

module.exports = adminControllers;