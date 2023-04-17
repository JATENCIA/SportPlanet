const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    lastName: {
      type: String,
    },

    dni: {
      type: Number,
      unique: true,
      minLength: 7,
      maxLength: 10,
    },

    eMail: {
      type: String,
      required: true,
      unique: true,
    },

    location: {
      type: String,
      ref: "Location",
    },

    telephone: {
      type: String,
      unique: true,
      minLength: 9,
    },

    roll: {
      type: String,
      enum: ["admin", "user", "superAdmin"],
      default: "user",
    },

    baneado: {
      type: Boolean,
      default: false,
    },

    review: [
      {
        type: mongoose.Types.ObjectId,
        ref: "ProductReview",
      },
    ],

    favorites: {
      type: Array,
    },

    mySales: {
      type: Array,
    },

    myShopping: {
      type: Array,
    },

    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
    ],
    payment: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Payments",
      },
    ],
    review: [
      {
        type: mongoose.Types.ObjectId,
        ref: "ProductReview",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Users", userSchema);
