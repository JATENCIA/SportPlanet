const app = require("./src/app");
const config = require("./src/config");

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.listen(config.PORT, () => {
  console.log(`Listening at http://localhost: ${config.PORT}`);
});
