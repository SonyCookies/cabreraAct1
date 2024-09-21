const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/user.routes");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
