const featuredProducts = require('../models/products.js');

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
}

module.exports = mainControllers;