const express = require("express");
const { getUsers } = require("../Controllers/AllFuction");

const userRoute=express.Router();
userRoute.get("/",getUsers)
module.exports=userRoute;