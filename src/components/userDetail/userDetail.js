import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export default function UserDetail({ onClose }) {
  return (
    <Box p="4">
      <Box>User Details</Box>
      <Button onClick={onClose}>Close</Button>
    </Box>
  );
}
