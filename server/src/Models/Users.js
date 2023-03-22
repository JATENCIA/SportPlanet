const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  favorites: {
    type: Array,
  },

  isSeller: {
    type: Boolean,
    default: false,
  },

  store: [
    {
      type: Schema.Types.ObjectId,
      ref: "Store",
    },
  ],
});

module.exports = model("Users", userSchema);
