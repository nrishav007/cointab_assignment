import React from 'react'
import {Button, Center, Flex} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { postReq } from '../Redux/AppReducer/Action';
const Home = () => {
  const url=process.env.REACT_APP_URL;
  const navigate=useNavigate();
  const [fstat,setFstat]=useState(false);
  const [dstat,setDstat]=useState(true);
  const dispatch=useDispatch();
  const handleUser=()=>{
    navigate("/allusers")
  }
  const handleFetch=()=>{
    dispatch(postReq());
    setDstat((rev)=>!rev);
    setFstat((rev)=>!rev);
  }
  const handleDelete=()=>{
    setDstat((rev)=>!rev)
    setFstat((rev)=>!rev)
  }
  return (
    <Center>
      <Flex gap={"10px"} mt={"10px"}>
        <Button isDisabled={fstat} onClick={handleFetch}>Fetch Users</Button>
        <Button isDisabled={dstat} onClick={handleDelete}>Delete Users</Button>
        <Button onClick={handleUser}>User Details</Button>
      </Flex>
    </Center>
  )
}

export default Home