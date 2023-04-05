const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT || 5000,
  USSER: process.env.USSER,
  PASS: process.env.PASS,
};
