const { Schema, model } = require("mongoose");

const StoreSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: "Users",
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },

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

module.exports = model("Stores", StoreSchema);
