import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../assets/images/GRN.png";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contacts", href: "/contacts" },
  ];

  // Define color values for light and dark modes
  const navbarBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");
  const menuBg = useColorModeValue("#f4f2f2", "gray.700");
  const activeLinkBg = useColorModeValue("white", "gray.800");
  const hoverColor = useColorModeValue(
    "rgba(0,0,0,0.6)",
    "rgba(255,255,255,0.6)"
  );
  const iconColor = useColorModeValue("yellow.500", "blue.500");

  return (
    <Flex
      bgColor={navbarBg}
      marginX={{ base: "15px", md: "20px", lg: "30px" }}
      marginY={"10px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position="sticky"
      top="0px"
      zIndex={1000}
    >
      <Box width={"50px"} height={"50px"}>
        <Image src={Logo} width={"100%"} height={"100%"} />
      </Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        gap="20px"
        alignItems="center"
        bg={menuBg}
        paddingX={"8px"}
        paddingY={"6px"}
        borderRadius={"30px"}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            fontSize={{ md: "16px", lg: "18px", xl: "18px" }}
            color={textColor}
            bg={location.pathname === item.href ? activeLinkBg : "transparent"}
            paddingX={"10px"}
            paddingY={"3px"}
            borderRadius={"24px"}
            fontFamily={"Sora"}
            fontWeight={500}
            cursor="pointer"
            _hover={{ color: hoverColor }}
          >
            {item.name}
          </Link>
        ))}
      </Flex>
      <Flex align="center" cursor="pointer" onClick={toggleColorMode}>
        <Icon
          as={colorMode === "light" ? Sun : Moon}
          boxSize={6}
          color={iconColor}
          transition="all 0.5s"
          transform={colorMode === "light" ? "rotate(0deg)" : "rotate(180deg)"}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
