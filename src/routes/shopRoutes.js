const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers')

router.get('/', shopControllers.cart);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add',shopControllers.addItem);
router.post('/cart', shopControllers.cart);
router.post('/cart', shopControllers.CheckoutCart);


module.exports = router;
