import React from 'react';
import { Box, useColorModeValue, Heading, VStack } from '@chakra-ui/react';

export default function DetailList({ children, heading }) {
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Box
      mb="6"
      px="4"
      py="6"
      boxShadow="sm"
      borderRadius="md"
      maxW="700px"
      mx="auto"
      bgColor={bgColor}>
      <Heading as="h2" fontSize="2xl">
        {heading}
      </Heading>
      <VStack spacing="2" align="left" mt="4">
        {children}
      </VStack>
    </Box>
  );
}
