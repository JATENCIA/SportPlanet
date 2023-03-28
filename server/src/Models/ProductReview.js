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
  Comment: {
    type: String,
    minLenght: 5,
    maxLenght: 140,
    allowNull: false,
  },
  Product: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Products",
    },
  ],
  User: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  ],
});

module.exports = mongoose.model("ProductReview", productReviewSchema);
