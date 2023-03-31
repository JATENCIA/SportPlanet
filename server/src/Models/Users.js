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
      minLength: 7,
      maxLength: 10,
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

    favorites: {
      type: Array,
    },

    payment: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Payments",
      },
    ],
    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Products",
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
