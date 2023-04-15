const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PASS: process.env.PASS,
  USSER: process.env.USSER,
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI,
  API_URL_BACK: process.env.API_URL_BACK,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
};
