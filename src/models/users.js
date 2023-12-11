const {conn} = require('./conn.js');

const validateLogin = async (email, password ) =>  {
    try {     
        const [verify] = await conn.query(`SELECT * FROM user where email="${email}" and password="${password}";`);
        return verify;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    validateLogin,
 
}

/* { email: 'prueba1@hotmail.com', password: 'asdfasdf' },
  { email: 'prueba2@hotmail.com', password: 'asdf' },
  { email: 'vladimir.delcid@bue.edu.ar', password: 'qwerty' },
  {
] */