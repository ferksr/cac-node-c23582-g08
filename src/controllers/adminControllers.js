const products = require('../models/products.js');
const users = require('../models/users.js');




const adminControllers = {
  admin:  async (req, res) => {     
    const product= req.params.id;
     const product_detail = await products.getProductsById(product); 
     const productList = await products.getProducts();  
     console.log(product_detail)   
     res.render('admin', {
         product : product_detail,
         list: productList
   } )} ,
   create: async (req, res) => {
    const categories = await products.getCategories();
    const licences = await products.getlicences();
    res.render("create", {
      categories: categories,
      licences: licences,
    },
    res.redirect("/login")
    );
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const categories = await products.getCategories();
    const licences = await products.getlicences();
    const [product] = await products.getProductsById(id);
    res.render("edit", {
      product: product,
      categories: categories,
      licences: licences,
    });

  },
  editProduct: async (req, res) => {
    console.log('editProduct controller called');
    const id = req.params.id;
    const product = req.body;
    console.log("Desde adminControllers:")
    console.log('Request parameters:', id, product);
    const productSchema = {
      product_name: product.product_name,
      product_description: product.product_description,
      price: product.price,
      stock: product.stock,
      discount: product.discount,
      sku: product.sku,
      dues: product.dues,
      image_front: product.image_front,
      image_back: product.image_back,
      licence_id: product.licence_id,
      category_id: product.category_id,
    };
    const result = await products.editProduct(productSchema, id);
    console.log(result);
    res.redirect("/admin/admin");
  },
  register: async (req, res) => {
		res.render('register', {
			title: 'Register',
			error: req.query.error
		})
	},
  registerPost: async (req, res) =>{
    const user= req.body;
    console.log("user "+user.name);
    await users.createUser(user.name, user.lastname, user.email, user.password);
    res.redirect("/login")

  },
  deleteProduct: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await products.deleteProduct(id);
    res.redirect("/admin/admin");
  },
  createProduct: async (req, res) => {
    const product = req.body;
    console.log("ahora");
    console.log(product);
    const productSchema = {
      product_name: product.product_name,
      product_description: product.product_description,
      price: product.price,
      stock: product.stock,
      discount: product.discount,
      sku: product.sku,
      dues: product.dues,
      image_front: product.image_front,
      image_back: product.image_back,
      licence_id: parseInt(product.licence_id),
      category_id: parseInt(product.category_id),
    };
    await products.createProduct(productSchema);
    res.redirect("/admin/admin");
  },
}

module.exports = adminControllers;