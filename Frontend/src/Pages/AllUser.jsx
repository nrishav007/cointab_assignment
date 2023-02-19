import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getReq } from '../Redux/AppReducer/Action';
import { Box, Button, Center, Flex, Select, SimpleGrid, useToast } from '@chakra-ui/react';
import SingleCard from './SingleCard';
const AllUser = () => {
  const url=process.env.REACT_APP_URL;
  // const url="http://localhost:8500";
  const dispatch=useDispatch();
  const toast = useToast();
  const [gen,setGen]=useState("");
  const [page,setPage]=useState(1);
  const handleFilter=(e)=>{
    setGen(e.target.value);
    setPage(1);
  }
  const data=useSelector((store)=>store.AppReducer.userData);
  useEffect(()=>{
    let apiCall=`${url}/user?page=${page}&limit=10`;
    if(gen!=""){
      apiCall+=`&gender=${gen}`;
    }
    dispatch(getReq(apiCall)).then((r)=>{
      toast({
        title: r,
        status: 'success',
        duration: 800,
        isClosable: true,
      })
    })
  },[gen,page])
  return (
    <Box>
      <Select onChange={handleFilter}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    <SimpleGrid columns={[1,2,3,3]} gap={"10px"} justifyContent={"space-between"}>
      {
        data.length>0&&data.map((user)=>(
          <Center>
          <SingleCard user={user} />
          </Center>
        ))
        }
    </SimpleGrid>
    <Flex mt={"20px"} mb={"20px"} justifyContent={"space-around"}>
    <Button backgroundColor={"gray.300"} isDisabled={page<=1} onClick={()=>setPage((p)=>p-1)}>Prev</Button>
    <Button backgroundColor={"gray.300"} isDisabled={data.length<9} onClick={()=>setPage((p)=>p+1)}>Next</Button>
    </Flex>
    </Box>
  )
}

export default AllUser