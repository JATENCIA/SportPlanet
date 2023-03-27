const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },

  image: {
    type: Array,
    required: true,
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

  store: {
    type: Schema.Types.ObjectId,
    ref: "Stores",
  },

  season: {
    type: Number,
  },

  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],

  size: {
    type: String,
  },
});

module.exports = model("Products", productsSchema);
