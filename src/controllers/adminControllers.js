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
    const licenses = await products.getLicenses();
    res.render("create", {
      categories: categories,
      licenses: licenses,
    });
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const categories = await products.getCategories();
    const licenses = await products.getLicenses();
    const [product] = await products.getProductsById(id);
    res.render("/edit", {
      product: product,
      categories: categories,
      licenses: licenses,
    });
  },
  editProduct: async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const productSchema = {
      product_name: product.name,
      product_description: product.description,
      price: product.price,
      stock: product.stock,
      discount: product.discount,
      dues: product.dues,
      image_front: product.frontImage,
      image_back: product.backImage,
      license_id: product.license,
      category_id: product.category,
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
      license_id: product.license,
      category_id: product.category,
    };
    await product.createProduct(productSchema);
    res.redirect("/admin/admin");
  },
}

module.exports = adminControllers;