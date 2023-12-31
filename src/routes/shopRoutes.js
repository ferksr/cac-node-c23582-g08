const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers')

router.get('/', shopControllers.shop);
router.get('/item/:product_id', shopControllers.item);
router.get('/cart', shopControllers.cart);

module.exports = router;



