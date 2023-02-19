const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
const { test, listen } = require("./Controllers/AllFuction");
const userRoute = require("./Routes/User.route");
let port = process.env.PORT || 4000;
app.use(express.json());
env.config();
app.use(
  cors({
    origin: "*",
  })
);
app.use("/user",userRoute);
app.get("/", test);

app.listen(port, listen);
module.exports=app;