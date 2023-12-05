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
        const [featuredProducts] = await conn.query(`
            SELECT pr.*, ca.*, li.*
            FROM product pr
            JOIN category ca ON pr.category_id = ca.category_id
            JOIN licence li ON pr.licence_id = li.licence_id
            ORDER BY pr.product_id ASC
            LIMIT 10;
        `);
        return featuredProducts;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const getFeaturedLicenses = async () => {
    try {
        const [licenses] = await conn.query(`
            SELECT li.*
            FROM licence li
            ORDER BY li.licence_id ASC
            LIMIT 3;
        `);
        return licenses;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getProducts,
    getFeaturedProducts,
    getFeaturedLicenses
}