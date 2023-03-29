const mongoose = require("mongoose");

const userReviewSchema = mongoose.Schema({
  attention: {
    type: Number,
    min: 1,
    max: 5,
    defaultValue: 1,
    allowNull: false,
  },
  deliveryOnTime: {
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

module.exports = mongoose.model("UserReview", userReviewSchema);
