const mongoose = require("mongoose");

const productReviewSchema = mongoose.Schema({
  quality: {
    type: Number,
    min: 1,
    max: 5,
    defaultValue: 1,
    allowNull: false,
  },
  comfort: {
    type: Number,
    min: 1,
    max: 5,
    defaultValue: 1,
    allowNull: false,
  },
  recommended: {
    type: Number,
    min: 1,
    max: 5,
    defaultValue: 1,
    allowNull: false,
  },
  comment: {
    type: String,
    minLenght: 5,
    maxLenght: 140,
    allowNull: false,
  },
  baneado: {
    type: Boolean,
    default: false,
  },
  product: {
    type: Array(mongoose.Types.ObjectId),
    ref: "Products",
  },

  user: {
    type: Array(mongoose.Types.ObjectId),
    ref: "Users",
  },
});

module.exports = mongoose.model("ProductReview", productReviewSchema);
