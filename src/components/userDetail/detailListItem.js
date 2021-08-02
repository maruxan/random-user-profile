import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

export default function DetailListItem({ label, text, subColor }) {
  return (
    <Box>
      <Text color={subColor} fontWeight="bold" fontSize="xs">
        {label}
      </Text>
      <Text mt="1" fontSize="lg">
        {text}
      </Text>
    </Box>
  );
}
