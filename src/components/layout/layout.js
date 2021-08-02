import React from 'react';
import { Box, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react';

import Header from './header';

export default function Layout({ master, detail }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box minH="100vh">
      {/* Header */}
      <Header bgColor={bgColor} />
      {/* Master/Detail */}
      <Flex mt="10vh">
        {/* Master */}
        <Box w={{ base: '100%', lg: '40%', xl: '25%' }} pos="fixed">
          {React.cloneElement(master, { onOpen: onOpen })}
        </Box>
        {/* Detail */}
        <Box
          position="absolute"
          w={{ base: '100%', lg: '60%', xl: '75%' }}
          right="0"
          p="4"
          zIndex="dropdown"
          hidden={!isOpen}
          bgColor={bgColor}>
          {detail &&
            React.cloneElement(detail, { onClose: onClose, isOpen: isOpen })}
        </Box>
      </Flex>
    </Box>
  );
}
