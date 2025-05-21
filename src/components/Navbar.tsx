import { Box, Flex, Icon, Image, Link } from "@chakra-ui/react";
import Logo from "../assets/images/GRN.png"
import { Sun } from "lucide-react";

const Navbar = () => {
    const menuItems = [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Contacts", href: "/contacts" },
    ];
  return (
    <>
      <Flex
        bgColor={"white"}
        marginX={"30px"}
        marginY={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={"50px"} height={"50px"}>
          <Image src={Logo} width={"100%"} height={"100%"} />
        </Box>
        <Flex
          display={{ base: "none", md: "flex" }}
          gap="20px"
          alignItems="center"
          bg={"#999999"}
          paddingX={"8px"}
          paddingY={"6px"}
          borderRadius={"30px"}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              fontSize={{ md: "16px", lg: "18px", xl: "18px" }}
              color={"#000000"}
              bg={location.pathname === item.href ? "white" : "transparent"}
              paddingX={"10px"}
              paddingY={"3px"}
              borderRadius={"24px"}
              fontFamily={"Sora"}
              fontWeight={{ md: 500, lg: 600, xl: 600 }}
              cursor="pointer"
              _hover={{ color: "rgba(0,0,0,0.6)" }}
            >
              {item.name}
            </Link>
          ))}
        </Flex>
        <Flex cursor={'pointer'}>
          <Icon
            as={Sun}
            boxSize={"25px"}
            color="yellow.500"
            transform="rotate(0deg)"
            transition="all 0.2s"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
