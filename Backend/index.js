const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
const  mdbConnection  = require("./Configs/DB");
app.use(express.json());
env.config();
let port = process.env.PORT || 4000;
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async(req, res) => {
  try {
    res.send({ msg: "deployed" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  try {
    mdbConnection;
    console.log(`listening to http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
