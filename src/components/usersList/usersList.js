import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export default function UsersList({ onOpen }) {
  return (
    <Box p="4">
      <Button onClick={onOpen}>Open Detail</Button>
    </Box>
  );
}
