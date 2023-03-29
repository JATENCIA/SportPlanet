const UserReview = require("../Models/UserReview");
const Users = require("../Models/Users");
const Products = require("../Models/Products");

const getUserReview = async (req, res) => {
  try {
    const UserReview = await UserReview.find({})
      .populate("user", {
        name: 1,
        image: 1,
        lastName: 1,
        eMail: 1,
        telephone: 1,
      })
      .populate("product", { name: 1, image: 1 });
    const { name } = req.query;

    if (name) {
      const result = UserReview.filter((elem) =>
        elem.name.toLowerCase().includes(name.toLowerCase())
      );
      name.length ? res.status(200).json(result) : res.status(204).json({});
    } else res.status(200).json(productReview);
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

const createUserReview = async (req, res) => {
  try {
    const UserReview = new UserReview({
      attention: req.body.attention,
      deliveryOnTime: req.body.deliveryOnTime,
      comment: req.body.comment,
      product: req.body.product,
      user: req.body.user,
    });
    const product = await Products.findById(req.body.product);
    const user = await Users.findById(req.body.user);
    const saveUserReview = await userReview.save();
    user.review = user.review.concat(saveUserReview._id);
    await user.save();
    user.review = user.review.concat(saveUserReview._id);
    await user.save();

    res.status(201).json(saveUserReview);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

const deleteUserReviewByid = async (req, res) => {
  try {
    const userReview = await -userReview.findById(req.params.id);
    let baneado = userReview?.baneado;
    if (userReview) {
      if (baneado === false) baneado = true;
      else baneado = false;
    } else res.status(204).json({});
    await UserReview.updateOne({ _id: req.params.id }, { $set: { baneado } });

    baneado
      ? res.status(200).json({
          message: `The User Review *** ${user.name.UserReview} *** is temporarily or permanently disabled.`,
          baneado: baneado,
        })
      : res.status(200).json({
          message: `the User Review *** ${user.name.userReview} *** is enabled`,
          baneado: baneado,
        });
  } catch (error) {
    res.status(500).json({ messaje: `${error}` });
  }
};

const updateUserReview = async (req, res) => {
  try {
    const userReviewUpdate = await UserReview.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!userReviewUpdate) return res.status(204).json({});
    res.status(200).json(storeUpdate);
  } catch (error) {
    res.status(500).json({ mensage: `${error}` });
  }
};

module.exports = {
  getUserReview,
  createUserReview,
  deleteUserReviewByid,
  updateUserReview,
};
