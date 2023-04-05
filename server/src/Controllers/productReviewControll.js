const ProductReview = require("../Models/ProductReview");
const Users = require("../Models/Users");
const Products = require("../Models/Products");

const getProductReview = async (req, res) => {
  try {
    const productReview = await ProductReview.find({})
      .populate("user", {
        name: 1,
        image: 1,
        lastName: 1,
        dni: 1,
        eMail: 1,
        location: 1,
        telephone: 1,
        baneado: 1,
      })
      .populate("product", {
        name: 1,
        image: 1,
        price: 1,
        baneado: 1,
        discount: 1,
        description: 1,
        season: 1,
        review: 1,
        size: 1,
        category: 1,
        gender: 1,
      });

    res.status(200).json(productReview);
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

const createProductReview = async (req, res) => {
  try {
    const user = await Users.findById(req.body.user);
    const product = await Products.findById(req.body.product);
    if (!user || !product) return res.status(204).json({});

    let iEqual = [];
    if (user.review.length !== 0) {
      iEqual = user.review.filter((element) =>
        JSON.stringify(product.review).includes(JSON.stringify(element))
      );
    }

    if (iEqual.length)
      return res
        .status(200)
        .json("You can`t write other review for this product.");

    const productReview = new ProductReview(req.body);
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
    let baneado = productReview?.baneado;
    if (productReview) {
      if (baneado === false) baneado = true;
      else baneado = false;
    } else res.status(204).json({});
    await ProductReview.updateOne(
      { _id: req.params.id },
      { $set: { baneado } }
    );

    baneado
      ? res.status(200).json({
          message: `The Product Review *** ${productReview.comment} *** is temporarily or permanently disabled.`,
          baneado: baneado,
        })
      : res.status(200).json({
          message: `the Product Review *** ${productReview.comment} *** is enabled`,
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
