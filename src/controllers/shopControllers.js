const products = require('../models/products.js');

const shopControllers = {
    shop: async (req, res) => { 
        const listProducts= await products.getProducts();       
            res.render('shop', {
            list: listProducts
        });                
    },
    
    item: async (req, res) => {        
        const item_name = req.params.product_name;
        const item_details = await products.getProductsByName(item_name); 
        console.log(item_details)   
        res.render('item', {
            item : item_details
        } )},
    cart: (req, res) => res.render('cart'),
}

module.exports = shopControllers;




