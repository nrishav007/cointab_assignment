import React from "react";
import {
  Button,
  Center,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delReq, postReq } from "../Redux/AppReducer/Action";
const Home = () => {
  const url = process.env.REACT_APP_URL;
  // const url="http://localhost:8500";
  
  const navigate = useNavigate();
  const [fstat, setFstat] = useState(false);
  const [dstat, setDstat] = useState(false);
  const dispatch = useDispatch();
  const handleUser = () => {
    navigate("/allusers");
  };
  const toast=useToast();
  const handleFetch = () => {
    
    
    dispatch(postReq(`${url}/user/add`));
    setDstat((rev) => !rev);
    setFstat((rev) => !rev);
    setTimeout(() => {
      setFstat((rev) => !rev);
      setDstat((rev) => !rev);
      toast({
        title: "Data Fetched",
        status: 'success',
        duration: 800,
        isClosable: true,
      })
    }, 15000);
    
  };
  const handleDelete = () => {
    dispatch(delReq(`${url}/user/delete`));
    setDstat((rev) => !rev);
    setFstat((rev) => !rev);
    onClose();
    setTimeout(() => {
      setFstat((rev) => !rev);
      setDstat((rev) => !rev);
      toast({
        title: "Data deleted",
        status: 'success',
        duration: 800,
        isClosable: true,
      })
    }, 15000);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text mt={"20px"} fontWeight={"bold"}>
              Would you like to delete all datas stored in database?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex gap={"10px"} mt={"10px"}>
        <Button isDisabled={fstat} onClick={handleFetch}>
          Fetch Users
        </Button>
        <Button isDisabled={dstat} onClick={onOpen}>
          Delete Users
        </Button>
        <Button onClick={handleUser}>User Details</Button>
      </Flex>
    </Center>
  );
};

export default Home;
