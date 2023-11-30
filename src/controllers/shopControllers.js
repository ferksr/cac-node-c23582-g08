const shopControllers = {
    shop: (req, res) => res.render('shop'),
    item: (req, res) => res.render('item', { id: req.params.id }),
    addItem: (req, res) => res.render('addItem'),
    cart: (req, res) => res.render('cart'),
    checkoutCart: (req, res) => res.render('checkoutCart'),
}

module.exports = shopControllers;




