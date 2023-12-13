const products = require('../models/products.js');

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
    });
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const categories = await products.getCategories();
    const licences = await products.getlicences();
    const [product] = await products.getProductsById(id);
    res.render("/edit", {
      product: product,
      categories: categories,
      licences: licences,
    });
  },
  editProduct: async (req, res) => {
    const id = req.params.id;
    const product = req.body;
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
  register: (req, res) => res.render('register'),
  deleteProduct: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await products.deleteProduct(id);
    res.redirect("/admin/admin");
  },
  createProduct: async (req, res) => {
    const product = req.body;
    console.log(product);
    const productSchema = {
      product_name: product.name,
      product_description: product.description,
      price: product.price,
      stock: product.stock,
      discount: product.discount,
      sku: product.sku,
      dues: product.dues,
      image_front: product.frontImage,
      image_back: product.backImage,
      licence_id: product.licence,
      category_id: product.category,
    };
    await products.createProduct(productSchema);
    res.redirect("/admin/admin");
  },
}

module.exports = adminControllers;