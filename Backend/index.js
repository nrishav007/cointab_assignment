const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	max: 1, 
	standardHeaders: true, 
	legacyHeaders: false,
})
app.use(limiter)
env.config();
const { test, listen } = require("./Controllers/AllFuction");
const userRoute = require("./Routes/User.route");
let port = process.env.PORT || 4000;
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use("/user",userRoute);
app.get("/", test);

app.listen(port, listen);

module.expots=app;