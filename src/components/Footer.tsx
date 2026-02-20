import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box as="footer" bg="#495E57" color="white" py={12} px={8}>
      <Flex 
        maxW="1000px" 
        mx="auto" 
        direction={{ base: "column", md: "row" }} 
        justify="space-between" 
        gap={12}
      >
        {/* Logo Column */}
        <Box>
            <Image src="/logo_footer.png" alt="Little Lemon" w="100px" mb={4} fallbackSrc="https://placehold.co/100x150?text=Logo" />
        </Box>

        {/* Navigation Column */}
        <VStack align="flex-start" gap={4}>
            <Text fontWeight="bold" color="#F4CE14">Doormat Navigation</Text>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/menu">Menu</RouterLink>
            <RouterLink to="/booking">Reservations</RouterLink>
            <RouterLink to="/order">Order Online</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
        </VStack>

        {/* Contact Column */}
        <VStack align="flex-start" gap={4}>
            <Text fontWeight="bold" color="#F4CE14">Contact</Text>
            <Text>Address</Text>
            <Text>Phone Number</Text>
            <Text>Email</Text>
        </VStack>

         {/* Social Media Column */}
         <VStack align="flex-start" gap={4}>
            <Text fontWeight="bold" color="#F4CE14">Social Media Links</Text>
            <Text>Address</Text>
            <Text>Phone Number</Text>
            <Text>Email</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
