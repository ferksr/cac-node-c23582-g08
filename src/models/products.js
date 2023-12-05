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

const getProductsByName = async(params) => {

    const {category,product_name, price} = params;
    try {
        const [item] = await conn.query('SELECT * FROM product pr join category ca on pr.category_id= ca.category_id where pr.product_name=? and pr.price=? ;',
        {category, product_name, price});
        return item;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}



module.exports = {
    getProducts,
    getProductsByName
}