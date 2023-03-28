const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },

    location: {
      type: String,
      ref: "Location",
      required: true,
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },

    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
    ],

    image: {
      type: String,
    },

    eMail: {
      type: String,
      required: true,
    },

    baneado: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Stores", StoreSchema);
