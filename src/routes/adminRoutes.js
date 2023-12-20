const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers.js');
const validation = require('../middlewares/validation.js');
const {body} = require('express-validator');
const {conn} = require('../models/conn.js');


const validationRegister = [
	body("email")
	  .isLength({ min: 3 })
	  .withMessage("Ingrese un nombre válido")
	  .bail()
	  .custom(async (value, { req }) => {
		try {
		  const [usuarioExiste] = await conn.query('SELECT * FROM user WHERE email = ?', [value]);
  
		  if (usuarioExiste.length > 0) {
			return Promise.reject();
		  } else {
			return Promise.resolve();
		  }
		} catch (error) {
		  console.log(error);
		  return Promise.reject("Error en la consulta");
		}
	  })
	  .withMessage("Email Duplicado"),
	body('lastname')
	  .isLength({ min: 3 })
	  .withMessage('Ingrese un apellido válido')
	  .custom((value, { req }) => value === req.body.lastname)
	  .withMessage('No coincide el apellido')
  ];

router.get('/admin/:id', adminControllers.admin);
router.get('/admin/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create',  adminControllers.createProduct);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', (req, res, next) => {
  console.log('PUT /edit/:id route handler called');
  next();
}, adminControllers.editProduct);
router.get('/register', adminControllers.register);

//router.post('/register', adminControllers.registerPost);
//Quitar comentarios para Activar Validacion
router.post('/register',validationRegister, validation, adminControllers.registerPost);

router.delete('/delete/:id', adminControllers.deleteProduct);


module.exports = router;