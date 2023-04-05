const mongoose = require("mongoose");

const productReviewSchema = mongoose.Schema(
  {
    quality: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },
    comfort: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },
    recommended: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },
    comment: {
      type: String,
      minLenght: 5,
      maxLenght: 200,
      required: true,
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

    attention: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },

    deliveryOnTime: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },

    packaging: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("ProductReview", productReviewSchema);
