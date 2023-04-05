const mongoose = require("mongoose");

const slidersSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Sliders", slidersSchema);
