
import { Box, Button, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <Box as="main">
      <Helmet>
        <title>Little Lemon - Home</title>
        <meta name="description" content="Welcome to Little Lemon, the best Mediterranean restaurant in Chicago. Reserve your table today!" />
      </Helmet>
      
      {/* Hero Section */}
      <Box bg="#495E57" pt={8} pb={12} px={8} position="relative">
        <Flex maxW="1000px" mx="auto" direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={10}>
          <VStack align="flex-start" color="white" maxW="400px" gap={0}>
            <Heading as="h1" size="3xl" color="#F4CE14" letterSpacing="wide">Little Lemon</Heading>
            <Heading as="h2" size="xl" fontWeight="medium" mb={4}>Chicago</Heading>
            <Text fontSize="lg" fontWeight="medium" mb={6} lineHeight="tall" textAlign="justify">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Text>
            <Button 
                asChild 
                bg="#F4CE14" 
                color="black" 
                size="lg" 
                fontWeight="bold" 
                borderRadius="16px"
                px={8}
                _hover={{ bg: "#E4BE13", transform: "translateY(-2px)" }}
                transition="all 0.2s"
            >
               <RouterLink to="/booking">Reserve a Table</RouterLink>
            </Button>
          </VStack>
          
          <Box 
            borderRadius="16px" 
            overflow="hidden" 
            boxShadow="2xl" 
            w={{ base: "300px", md: "350px" }} 
            h={{ base: "300px", md: "400px" }}
            mt={{ base: 8, md: 0 }}
            position="relative"
            zIndex={1}
          >
             <Image 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Interior" 
                objectFit="cover" 
                w="full" 
                h="full" 
             />
          </Box>
        </Flex>
      </Box>

      {/* Specials Section */}
      <Box py={24} px={8} maxW="1000px" mx="auto">
        <Flex justify="space-between" align="center" mb={12} wrap="wrap" gap={4}>
          <Heading as="h2" size="2xl">This weeks specials!</Heading>
          <Button 
            bg="#F4CE14" 
            color="black" 
            fontWeight="bold" 
            size="lg" 
            borderRadius="16px"
            _hover={{ bg: "#E4BE13", transform: "translateY(-2px)" }}
            transition="all 0.2s"
          >
            Online Menu
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {[
            { 
                title: "Greek Salad", 
                price: "$12.99", 
                description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
                image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                title: "Bruschetta", 
                price: "$5.99", 
                description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
                image: "https://plus.unsplash.com/premium_photo-1677686707252-16013f466e61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            { 
                title: "Lemon Dessert", 
                price: "$5.00", 
                description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
                image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
          ].map((item, index) => (
             <Box 
                key={index} 
                bg="#EDEFEE" 
                borderRadius="16px" 
                overflow="hidden" 
                boxShadow="lg"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                display="flex"
                flexDirection="column"
             >
               <Image src={item.image} alt={item.title} h="200px" w="full" objectFit="cover" />
               <VStack align="flex-start" p={6} gap={4} flex="1">
                 <HStack justify="space-between" w="full">
                    <Heading as="h3" size="md" color="black">{item.title}</Heading>
                    <Text color="#EE9972" fontWeight="bold">{item.price}</Text>
                 </HStack>
                 <Text color="#495E57" fontSize="sm" flex="1">
                   {item.description}
                 </Text>
                 <Text fontWeight="bold" fontSize="sm" cursor="pointer" _hover={{ textDecoration: "underline" }} color="black">
                    Order a delivery 🚴
                 </Text>
               </VStack>
             </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomePage;
