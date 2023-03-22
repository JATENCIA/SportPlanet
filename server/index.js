const app = require("./src/app");
const config = require("./src/config");

app.listen(config.PORT, () => {
  console.log(`Listening at http://localhost: ${config.PORT}`);
});
