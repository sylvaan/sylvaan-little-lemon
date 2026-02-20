import { Box, Flex, HStack, Image, Link, IconButton, VStack, useDisclosure, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Using a simple SVG for hamburger icon to avoid extra dependencies if possible
const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box as="header" position="sticky" top={0} zIndex={1000} bg="white" boxShadow="sm">
      <Flex maxW="1200px" mx="auto" px={8} h="24" align="center" justify="space-between">
        {/* Logo */}
        <RouterLink to="/">
           <Image src="/logo.svg" alt="Little Lemon" h="50px" fallbackSrc="https://placehold.co/200x50?text=Little+Lemon" />
        </RouterLink>

        {/* Desktop Navigation */}
        <HStack as="nav" gap={8} display={{ base: "none", md: "flex" }}>
          {["Home", "About", "Menu", "Reservations", "Order Online", "Login"].map((item) => (
            <Link 
              key={item} 
              asChild 
              fontWeight="bold" 
              fontSize="md" 
              _hover={{ color: "#495E57" }}
            >
               <RouterLink to={item === "Home" ? "/" : item === "Introduction" ? "/about" : item === "Reservations" ? "/booking" : "#"}>{item}</RouterLink>
            </Link>
          ))}
        </HStack>

        {/* Mobile Hamburger Button */}
        <Box display={{ base: "block", md: "none" }} onClick={onToggle} cursor="pointer">
            {open ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
      </Flex>

      {/* Mobile Navigation Menu */}
      {open && (
        <Box display={{ base: "block", md: "none" }} bg="white" px={8} pb={8} boxShadow="md">
            <Stack as="nav" gap={4}>
                {["Home", "About", "Menu", "Reservations", "Order Online", "Login"].map((item) => (
                    <Link 
                        key={item} 
                        asChild 
                        fontWeight="bold" 
                        fontSize="lg" 
                        py={2}
                        borderBottom="1px solid"
                        borderColor="gray.100"
                        onClick={onToggle}
                    >
                         <RouterLink to={item === "Home" ? "/" : item === "Reservations" ? "/booking" : "#"}>{item}</RouterLink>
                    </Link>
                ))}
            </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
