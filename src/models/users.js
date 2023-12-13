const {conn} = require('./conn.js');
const crypt = require('bcryptjs');

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

const createUser = async (name, lastname, email, password) => {
    const hash = await crypt.hash(password, 12);
    try {

        const [user_added]= await conn.query(`INSERT INTO user (name, lastname, email,password) values ("${name}", "${lastname}", "${email}", "${hash}");`);
        return user_added;        
    } catch (error) {
        console.log(error);
    }finally{
        conn.releaseConnection();
    }
}

module.exports = {
    validateLogin,
    createUser,
 
}