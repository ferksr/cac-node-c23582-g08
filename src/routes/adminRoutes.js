const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers')

router.get('/admin/:id', adminControllers.admin);
router.get('/create', adminControllers.create);
router.get('/edit/:id', adminControllers.edit);
router.get('/register', adminControllers.register);
router.post('/register',adminControllers.registerPost);

module.exports = router;