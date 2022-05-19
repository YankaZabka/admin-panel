import React from "react";
import {
  Flex,
  Text,
  useColorModeValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <VStack
        direction="column"
        bg={bgColor}
        p={12}
        rounded={6}
        maxW="600px"
        spacing={8}
      >
        <Text fontSize="4xl" fontWeight="bold" align="center">
          404!
        </Text>
        <Text fontSize="xl" fontWeight="bold" as="em" align="center">
          Sorry, the page you visited does not exist.
        </Text>
        <Button colorScheme="teal" variant="solid">
          <Link to="/">Back home</Link>
        </Button>
      </VStack>
    </Flex>
  );
};

export default NotFoundPage;
