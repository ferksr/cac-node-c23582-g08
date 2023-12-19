const express = require('express');
const router = express.Router();
const validation = require('../middlewares/validation.js');
const {body} = require('express-validator')
const {conn} = require('../models/conn.js');

const authControllers = require('../controllers/authControllers');


const validationLogin = [
    body('name')
        .notEmpty()
        .withMessage('El campo de nombre no puede estar vacío')
        .isLength({min: 3})
        .withMessage('El nombre debe tener longitud mínima de 3 caracteres'),
    body('lastname').isLength({min: 3}).withMessage('El apellido debe tener longitud correcta')
    ]
    
router.get('/login', authControllers.login);
router.post('/login', authControllers.loginPost);
//router.post('/login',validationLogin, validation, authControllers.loginPost);



module.exports = router;