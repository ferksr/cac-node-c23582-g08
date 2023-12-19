const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers.js');
const validation = require('../middlewares/validation.js');
const {body} = require('express-validator');
const {conn} = require('../models/conn.js');


const validationRegister = [
	body("name")
	.isLength({min: 3})
	.withMessage("Ingrese un nombre válido")
	.bail()
	.custom((value, {req}) => {
			return new Promise(async (resolve, reject) => {
				try {
					const [usuarioExiste] = await conn.query(`SELECT * FROM users WHERE name = '${value}'`)
					if(!usuarioExiste){
						return reject()
					} else {
						return resolve()
					}
				} catch (error) {
					console.log(error)
				}
			})
		})
	.withMessage("Nombre duplicado"),
	body('lastname')
	.isLength({min: 3})
	.withMessage('Ingrese un apellido válido')
	.custom((value, {req}) => value === req.body.lastname)
	.withMessage('No coindice el apellido')
	]
 

router.get('/admin/:id', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create',  adminControllers.createProduct);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', (req, res, next) => {
  console.log('PUT /edit/:id route handler called');
  next();
}, adminControllers.editProduct);
router.get('/register', adminControllers.register);

router.post('/register', adminControllers.registerPost);
//Quitar comentarios para Activar Validacion
//router.post('/register',validationRegister, validation, adminControllers.registerPost);

router.delete('/delete/:id', adminControllers.deleteProduct);


module.exports = router;