const shopControllers= {
    shop: (req, res)=> res.render('shop'),
    item: (req, res)=> res.send(`Route for find a retrieve a producto from an id:${req.params.id}`),
    addItem:  (req, res)=> res.send('Route for add the current item to the shop cart'),
    cart: (req, res)=>res.send('Route for cart view'),
    CheckoutCart: (req, res)=>res.send('Route for got to checkout page')
}

module.exports= shopControllers;