import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default function UserDetail({ onClose }) {
  return (
    <Box p="4" h="100vh">
      <Flex align="center">
        <Button onClick={onClose} mr="4">
          Close
        </Button>
        <Text fontSize="lg">User Details</Text>
      </Flex>
    </Box>
  );
}
