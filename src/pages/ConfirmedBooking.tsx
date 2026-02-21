import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ConfirmedBooking = () => {
  return (
    <Box bg="#495E57" minH="100vh" py={20} px={8} display="flex" alignItems="center" justifyContent="center">
      <Helmet>
        <title>Booking Confirmed - Little Lemon</title>
      </Helmet>
      
      <Box bg="white" p={10} borderRadius="2xl" boxShadow="2xl" maxW="600px" textAlign="center">
        <VStack gap={6}>
            <Box bg="#F4CE14" p={4} borderRadius="full" display="inline-flex">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#495E57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Box>
            
            <Heading as="h1" size="2xl" color="#495E57">Booking Confirmed!</Heading>
            
            <Text fontSize="lg" color="gray.600">
                Thank you for choosing Little Lemon. Your table has been successfully reserved. 
                We look forward to hosting you for an unforgettable Mediterranean culinary experience.
            </Text>
            
            <Button 
                asChild 
                bg="#F4CE14" 
                color="black" 
                size="lg" 
                fontWeight="bold" 
                borderRadius="16px"
                px={8}
                mt={4}
                _hover={{ bg: "#E4BE13", transform: "translateY(-2px)" }}
            >
                <RouterLink to="/">Return to Home</RouterLink>
            </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ConfirmedBooking;
