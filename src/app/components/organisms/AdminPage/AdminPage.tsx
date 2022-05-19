import React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../../molecules/Footer";
import Header from "../Header";

const AdminPage: React.FC = () => {
  return (
    <VStack spacing={0} minH="100vh">
      <Header />
      <Flex flex="auto" alignItems="center" justifyContent="center">
        <Outlet />
      </Flex>
      <Footer />
    </VStack>
  );
};

export default AdminPage;
