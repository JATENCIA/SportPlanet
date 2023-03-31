const ProductReview = require("../Models/ProductReview");
const Users = require("../Models/Users");
const Products = require("../Models/Products");

const getProductReview = async (req, res) => {
  try {
    const productReview = await ProductReview.find({});
    const { name } = req.query;

    if (name) {
      const result = productReview.filter((elem) =>
        elem.name.toLowerCase().includes(name.toLowerCase())
      );
      name.length ? res.status(200).json(result) : res.status(204).json({});
    } else res.status(200).json(productReview);
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

const createProductReview = async (req, res) => {
  try {
    const productReview = new ProductReview(req.body);
    const product = await Products.findById(req.body.product);
    const user = await Users.findById(req.body.user);
    const saveProductReview = await productReview.save();
    user.review = user.review.concat(saveProductReview._id);
    await user.save();
    product.review = product.review.concat(saveProductReview._id);
    await product.save();

    res.status(201).json(saveProductReview);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

const deleteProductReviewByid = async (req, res) => {
  try {
    const productReview = await ProductReview.findById(req.params.id);
    let baneado = product?.baneado;
    if (product) {
      if (baneado === false) baneado = true;
      else baneado = false;
    } else res.status(204).json({});
    await ProductReview.updateOne(
      { _id: req.params.id },
      { $set: { baneado } }
    );

    baneado
      ? res.status(200).json({
          message: `The store *** ${product.name.ProductReview} *** is temporarily or permanently disabled.`,
          baneado: baneado,
        })
      : res.status(200).json({
          message: `the store *** ${product.name.productReview} *** is enabled`,
          baneado: baneado,
        });
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

const updateProductReview = async (req, res) => {
  try {
    const productReviewUpdate = await ProductReview.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!productReviewUpdate) return res.status(204).json({});
    res.status(200).json(storeUpdate);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

module.exports = {
  getProductReview,
  createProductReview,
  deleteProductReviewByid,
  updateProductReview,
};
