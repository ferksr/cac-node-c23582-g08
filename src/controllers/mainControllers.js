const featuredProducts = require('../models/products.js');


const mainControllers = {
    home: async (req, res) => { 
        const listProducts = await featuredProducts.getFeaturedProducts();
        const listlicences = await featuredProducts.getFeaturedlicences();

        res.render('index', {
            products: listProducts,
            licences: listlicences
        });
    },
    contact: (req, res) => res.render('index'),
    about: (req, res) => res.render('index'),
    faqs: (req, res) => res.render('index'),
 
}

module.exports = mainControllers;