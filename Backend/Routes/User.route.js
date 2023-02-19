const express = require("express");
const { getUsers, fetchUsers, delUsers } = require("../Controllers/AllFuction");

const userRoute=express.Router();
userRoute.get("/",getUsers);
userRoute.post("/add",fetchUsers);
userRoute.delete("/delete",delUsers);
module.exports=userRoute;