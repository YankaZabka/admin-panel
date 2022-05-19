import React from "react";
import { Center, useColorModeValue, Text, Link } from "@chakra-ui/react";

const Footer: React.FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Center p={4} w="100%" bg={bgColor}>
      <Text fontSize="lg">
        Admin Panel ©2022 Created by{" "}
        <Link color="teal.500" href="https://github.com/YankaZabka" isExternal>
          YankaZabka
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
