const {conn} = require('./conn.js');

const getProducts = async () => {
    try {
        const [products] = await conn.query('SELECT * FROM product pr join category ca on pr.category_id= ca.category_id;');
        return products;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const getFeaturedProducts = async () => {
    try {
        const [products] = await conn.query('SELECT * FROM product pr JOIN category ca ON pr.category_id = ca.category_id LIMIT 10;');
        return products;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}


module.exports = {
    getProducts,
    getFeaturedProducts
}