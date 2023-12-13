const {conn} = require('./conn.js');

const getProducts = async () => {
    try {
        const [products] = await conn.query('SELECT * FROM product pr join category ca on pr.category_id= ca.category_id JOIN licence li ON pr.licence_id = li.licence_id ORDER BY pr.product_id ASC;');
        return products;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}


const getProductsById = async(product) => {
   
    try {
        const [productResult] = await conn.query(`SELECT * FROM product pr join category ca on pr.category_id= ca.category_id where pr.product_id=${product};`);
        return productResult;
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
        conn.releaseConnection();
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const getFeaturedlicences = async () => {
    try {
        const [licences] = await conn.query(`
            SELECT li.*
            FROM licence li
            ORDER BY li.licence_id ASC
            LIMIT 3;
        `);
        return licences;
    } catch (error){
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const getCategories = async() => {
    try {
        const [rows] = await conn.query('SELECT * FROM category;');
         return rows
    } catch (error) {
    throw error
  } finally {
    conn.releaseConnection()
    }
  }

  const getlicences = async() => {
    try {
        const [rows] = await conn.query('SELECT * FROM licence;');
         return rows
    } catch (error) {
    throw error
  } finally {
    conn.releaseConnection()
    }
  }

  const createProduct = async (params) => {
	try {
		const [product] = await conn.query('INSERT INTO product SET ? ;', params)
		return product
	} catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}

const editProduct = async (params, id) => {
	try {
	  console.log(params, id); 
		const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, {product_id: id}]);
    console.log('Desde Products:', rows);
		console.log([rows], params);
	  	const response = {
			isError: false,
			message: `Producto modificado`,
			status: rows,
	  };
  
	  return response;
	} catch (e) {
	  const error = {
		isError: true,
		message: `Producto no modificado`
	  };
  
	  return error;
	} finally {
	  await conn.releaseConnection();
	}
  };

  const deleteProduct = async ( id) => {
	try {
	  const [rows] = await conn.query('DELETE FROM product WHERE product_id = ?;', [id]);
	  console.log("modelo-rows",[rows])
	  const response = {
		isError: false,
		data: rows,
		message: `Producto borrado`,
		
	  };
	 
	  return response;
	} catch (e) {
	  const error = {
		isError: true,
		message: `Producto no borrado`
	  };
  
	  return error;
	} finally {
	  await conn.releaseConnection();
	}
  }


module.exports = {
    getProducts,
    getFeaturedProducts,
    getFeaturedlicences,
    getProductsById,
    getCategories,
    getlicences,
    createProduct,
    editProduct,
    deleteProduct
}