const mongoose = require("mongoose");

const slidersSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Sliders", slidersSchema);
