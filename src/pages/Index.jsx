import { Box, Flex, Heading, Text, Image, SimpleGrid, Link } from '@chakra-ui/react';
import { FaCalendarAlt, FaTrophy, FaCamera } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="/images/venus-williams.jpg" alt="Venus Williams" />
        <Heading as="h1" size="xl" mt={5}>Venus Williams</Heading>
        <Text fontSize="md">Professional Tennis Player</Text>
      </Flex>
      <SimpleGrid columns={3} spacing={10}>
        <Box boxShadow="md" p={5} borderRadius="md">
          <Heading as="h2" size="lg" mb={3}><FaTrophy /> Career Highlights</Heading>
          <Text fontSize="md">7 Grand Slam titles, 5 Wimbledon championships, and numerous Olympic gold medals.</Text>
        </Box>
        <Box boxShadow="md" p={5} borderRadius="md">
          <Heading as="h2" size="lg" mb={3}><FaCalendarAlt /> Upcoming Events</Heading>
          <Text fontSize="md">Participating in the US Open, August 2023.</Text>
          <Link href="#" color="teal.500">View all events</Link>
        </Box>
        <Box boxShadow="md" p={5} borderRadius="md">
          <Heading as="h2" size="lg" mb={3}><FaCamera /> Photo Gallery</Heading>
          <Text fontSize="md">Explore a collection of memorable moments from Venus's career.</Text>
          <Link href="#" color="teal.500">Visit gallery</Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;