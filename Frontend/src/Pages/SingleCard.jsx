import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

const SingleCard = ({ user }) => {
  const { picture, name,gender,email } = user;
  return (
    <Box mt={"10px"}>
      <Center>
        <Image src={picture.large} />
      </Center>
      <Center>
        <Text>
          Name: {name.title}. {name.first} {name.last}
        </Text>
      </Center>
      <Center>
        <Text>
          E-mail: {email}
        </Text>
      </Center>
      <Center>
        <Text>
          Gender: {gender}
        </Text>
      </Center>
    </Box>
  );
};

export default SingleCard;
