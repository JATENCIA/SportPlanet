const mongoose = require("mongoose");
const config = require("./config");
(async () => {
  try {
    const mongodb = await mongoose.connect(`${config.MONGODB_URI}`);
    if (mongodb) console.log(`Connected to MongoDB *** SportPlanet ***`);
  } catch (error) {
    console.log({ message: `Error connection to MongoDB ${error}` });
  }
})();
