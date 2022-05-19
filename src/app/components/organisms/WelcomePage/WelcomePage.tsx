import React from "react";
import { Flex, useColorModeValue, VStack, Text } from "@chakra-ui/react";

const WelcomePage: React.FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex flex="auto" alignItems="center" justifyContent="center">
      <VStack
        direction="column"
        bg={bgColor}
        p={12}
        rounded={6}
        maxW="600px"
        spacing={8}
      >
        <Text fontSize="4xl" fontWeight="bold" align="center">
          Welcome to Admin-panel!
        </Text>
        <Text fontSize="xl" fontWeight="bold" as="em" align="center">
          You can browse through &apos;Albums&apos; page Feel free to use
          navigation buttons on the top of our site
        </Text>
      </VStack>
    </Flex>
  );
};

export default WelcomePage;
