const products = require('../models/products.js');

const mainControllers = {
    home: async (req, res) => { 
        const listProducts= await products.getFeaturedProducts();

        console.log(listProducts);
        res.render('index', {
            list: listProducts
        });
    },
    contact: (req, res) => res.render('index'),
    about: (req, res) => res.render('index'),
    faqs: (req, res) => res.render('index'),
}

module.exports = mainControllers;