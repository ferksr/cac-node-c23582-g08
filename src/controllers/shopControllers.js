const products = require('../models/products.js');

const shopControllers = {
    shop: async (req, res) => { 
        const listProducts= await products.getProducts();       
            res.render('shop', {
            list: listProducts
        });                
    },
    
    item: async (req, res) => {     
         const product= req.params.product_id;
          const item_detail = await products.getProductsById(product); 
          const items = await products.getProducts();  
          console.log(item_detail)   
          res.render('item', {
              item : item_detail,
              list: items
        } )},
    cart: (req, res) => res.render('cart'),
}

module.exports = shopControllers;




