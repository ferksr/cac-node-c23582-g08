const products = require('../models/products.js');

const shopControllers = {
    shop: async (req, res) => { 
        const listProducts= await products.getProducts();

        console.log(listProducts);
        res.render('shop', {
            list: listProducts
        });
    },
    
    item: (req, res) => res.render('item'),
    cart: (req, res) => res.render('cart'),
}

module.exports = shopControllers;




