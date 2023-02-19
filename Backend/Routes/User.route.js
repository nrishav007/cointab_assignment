const express = require("express");
const { getUsers, fetchUsers } = require("../Controllers/AllFuction");

const userRoute=express.Router();
userRoute.get("/",getUsers);
userRoute.post("/add",fetchUsers);
module.exports=userRoute;