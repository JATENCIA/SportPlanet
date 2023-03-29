const Products = require("../Models/Products");
const Stores = require("../Models/Stores");

/**
 * It returns a list of products, if the name query parameter is present, it filters the list of
 * products by name
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const getProducts = async (req, res) => {
  try {
    const products = await Products.find({}).populate("store", {
      name: 1,
      location: 1,
      user: 1,
      eMail: 1,
      baneado: 1,
    });
    const { name } = req.query;

    if (name) {
      const result = products.filter((elem) =>
        elem.name.toLowerCase().includes(name.toLowerCase())
      );
      name.length ? res.status(200).json(result) : res.status(204).json({});
    } else res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

/**
 * It gets a product from the database by its id
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 * @returns The product with the id that is passed in the request.
 */
const getProduct = async (req, res) => {
  try {
    const store = await Products.findById(req.params.id).populate("store", {
      name: 1,
      location: 1,
      user: 1,
      eMail: 1,
      baneado: 1,
    });
    if (!store) return res.status(204).json({});
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It creates a new product and saves it to the database
 * @param req - The request object.
 * @param res - The response object.
 */
const createProduct = async (req, res) => {
  try {
    const Product = req.body;
    const product = new Products({
      name: Product.name.toUpperCase(),
      image: Product.image,
      price: Product.price,
      discount: Product.discount,
      description: Product.description,
      store: Product.store,
      season: Product.season,
      size: Product.size,
      category: Product.category,
      gender: Product.gender,
      state: Product.state,
    });
    const store = await Stores.findById(req.body.store);
    const saveProduct = await product.save();
    store.product = store.product.concat(saveProduct._id);
    await store.save();
    res.status(201).json(saveProduct);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It finds a product by its id and updates it with the data sent in the request body
 * @param req - The request object.
 * @param res - The response object.
 * @returns The productUpdate is being returned.
 */
const updateProduct = async (req, res) => {
  try {
    const productUpdate = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!productUpdate) return res.status(204).json({});
    res.status(200).json(productUpdate);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

/**
 * It's a function that allows you to disable or enable a product
 * @param req - request
 * @param res - response
 */
const deleteProductByid = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    let baneado = product?.baneado;
    if (product) {
      if (baneado === false) baneado = true;
      else baneado = false;
    } else res.status(204).json({});
    await Products.updateOne({ _id: req.params.id }, { $set: { baneado } });

    baneado
      ? res.status(200).json({
          message: `The store *** ${product.name} *** is temporarily or permanently disabled.`,
          baneado: baneado,
        })
      : res.status(200).json({
          message: `the store *** ${product.name} *** is enabled`,
          baneado: baneado,
        });
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProductByid,
};
