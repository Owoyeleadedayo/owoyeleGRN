import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Logo from "../assets/images/GRN.png";
import Logo2 from "../assets/images/GRNlite.png";
import { Sun, Moon, Menu } from "lucide-react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contacts", href: "/contacts" },
  ];

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
    <>
      <Flex
        bgColor={navbarBg}
        paddingX={{ base: "15px", md: "20px", lg: "30px" }}
        paddingY={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow={"0 2px 4px rgba(0, 0, 0, 0.1)"}
        position="sticky"
        top="0px"
        zIndex={1000}
      >
        <Box width={"50px"} height={"50px"}>
          <Image
            src={colorMode === "light" ? Logo : Logo2}
            width={"100%"}
            height={"100%"}
          />
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
              bg={
                location.pathname === item.href ? activeLinkBg : "transparent"
              }
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
        <Flex
          align="center"
          cursor="pointer"
          display={{ base: "none", md: "flex" }}
          onClick={toggleColorMode}
        >
          <Box
            as="span"
            display="inline-block"
            sx={{
              "& svg": {
                transition: "transform 0.5s ease-in-out",
                transform:
                  colorMode === "light" ? "rotate(0deg)" : "rotate(180deg)",
              },
            }}
            key={colorMode}
          >
            <Icon
              as={colorMode === "light" ? Sun : Moon}
              boxSize={6}
              color={iconColor}
            />
          </Box>
        </Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<Menu />}
          variant="none"
          color="black"
          onClick={onOpen}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#f4f2f2">
          <DrawerCloseButton color="#000000" />
          <VStack
            align="start"
            spacing="20px"
            mt="80px"
            pl="20px"
            color="#FFFFFF"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                fontSize="18px"
                fontFamily={"Sora"}
                fontWeight={500}
                cursor="pointer"
                onClick={onClose}
                color={location.pathname === item.href ? "#000" : "#FFFFFF"}
                _hover={{ color: hoverColor }}
              >
                {item.name}
              </Link>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
