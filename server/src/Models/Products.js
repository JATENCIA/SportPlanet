const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },

    image: {
      type: Array,
      required: true,
      minLength: 1,
      maxLength: 3,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    baneado: {
      type: Boolean,
      default: false,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 99,
    },

    description: {
      type: String,
      required: true,
      minLength: 30,
      maxLength: 500,
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },

    season: {
      type: Number,
    },

    review: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Reviews",
      },
    ],

    size: {
      type: Array,
    },

    category: {
      type: String,
      enum: [
        "tshirts",
        "pants",
        "footwear",
        "balls", 
        "supplements",
        "accessories",
      ],
      default: "accessories",
    },

    gender: {
      type: String,
      enum: ["men", "women", "unisex"],
      default: "unisex",
    },

    state: {
      type: "String",
      enum: ["new", "used"],
      default: "new",
    },
    brands: {
      type: "String",
      enum: [
        "PUMA",
        "ADIDAS",
        "REBOOK",
        "COLUMBIA",
        "NIKE",
        "UNDER ARMOUR",
        "OTHER",
      ],
      default: "OTHER",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Products", productsSchema);


