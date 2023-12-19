const users = require('../models/users.js');

const authControllers = {
    login: (req, res) => {
		res.render('login', {
			title: 'Login',
			error: req.query.error
		})
	},
    loginPost:  async (req, res) => {
        const {email, password}= req.body;
        console.log(email , password)
        
        const [validate]= await users.validateLogin(email);
        if(validate === undefined){
			res.redirect('/login/?error=1')
		} else {
			res.redirect(`/admin/admin/${validate.user_id}`)
		}
    
      } 
    }


module.exports = authControllers;