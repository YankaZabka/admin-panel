import React from "react";
import { CalendarIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { BiPhotoAlbum, BiLogOut } from "react-icons/bi";
import { RiHome3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header: React.FC = () => {
  const auth: any = useAuth();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");

  const onLogout = () => {
    auth.logOut();
  };

  const onHome = () => {
    navigate("/");
  };

  const onAlbums = () => {
    navigate("albums");
  };

  const onDateRange = () => {
    navigate("dateRange");
  };

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      p={4}
      w="100%"
      bg={bgColor}
    >
      <Box p="2">
        <Heading size="md">Admin Panel</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal" spacing={0} onClick={toggleColorMode}>
          <Icon as={colorMode === "light" ? MoonIcon : SunIcon} w={5} h={5} />
        </Button>
        <Button
          leftIcon={<Icon as={RiHome3Fill} w={5} h={5} />}
          colorScheme="teal"
          onClick={onHome}
        >
          Home
        </Button>
        <Button
          leftIcon={<Icon as={BiPhotoAlbum} w={5} h={5} />}
          colorScheme="teal"
          onClick={onAlbums}
        >
          Albums
        </Button>
        <Button
          leftIcon={<CalendarIcon />}
          colorScheme="teal"
          onClick={onDateRange}
        >
          DateRange
        </Button>
        <Button
          leftIcon={<Icon as={BiLogOut} w={5} h={5} />}
          colorScheme="teal"
          onClick={onLogout}
        >
          Log out
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
