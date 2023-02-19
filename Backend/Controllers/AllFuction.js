const mdbConnection = require("../Configs/DB");
const env = require("dotenv");
env.config();
const userModel = require("../Models/User.model");
let port = process.env.PORT || 4000;
const api = process.env.API;
const test = (req, res) => {
  try {
    res.status(200).send({ msg: "deployed" });
  } catch (error) {
    console.log(error);
  }
};

const listen = () => {
  try {
    mdbConnection;
    console.log(`listening to http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
};

const fetchUsers = async (req, res) => {
  try {
    await userModel.insertMany(req.body);
    res.status(200).send({ msg: "data added in database" });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const getUsers = async (req, res) => {
  try {
    let {gender,limit=6,page=1}=req.query;
    let payload={};
    if(gender!=undefined){
      payload.gender=gender
    }
    let data = await userModel.find(payload).limit(limit).skip((page-1)*limit);
    res.status(200).send({ msg: data });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
const delUsers=async(req,res)=>{
  try {
    await userModel.deleteMany({});
    res.status(200).send({ msg: "All data deleted" });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
}

module.exports = { test, listen, fetchUsers, getUsers, delUsers };
