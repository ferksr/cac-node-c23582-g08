const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers')

router.get('/admin/:id', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.createProduct);
router.get('/edit/:id', adminControllers.editProduct);
router.get('/register', adminControllers.register);
router.delete('/delete/:id', adminControllers.deleteProduct);

module.exports = router;