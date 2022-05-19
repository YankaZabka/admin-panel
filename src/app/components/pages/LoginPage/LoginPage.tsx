import React from "react";
import { Flex, useColorModeValue, VStack } from "@chakra-ui/react";
import PublicRoute from "../../molecules/PublicRoute";
import LoginForm from "../../organisms/forms/LoginForm";

const LoginPage: React.FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <PublicRoute>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <VStack
          direction="column"
          bg={bgColor}
          p={12}
          rounded={6}
          w="500px"
          spacing={8}
        >
          <LoginForm />
        </VStack>
      </Flex>
    </PublicRoute>
  );
};

export default LoginPage;
