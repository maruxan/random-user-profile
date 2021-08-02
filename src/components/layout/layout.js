import React from 'react';
import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function Layout({ master, detail }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      {/* Header */}
      <Flex align="center" justify="space-between" p="4">
        <Text fontSize="xl">random-user-profile</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      {/* Master/Detail */}
      <Flex>
        <Box w={{ base: '100%', lg: '400px' }}>
          {React.cloneElement(master, { onOpen: onOpen })}
        </Box>
        <Box
          position={{ base: 'absolute', lg: 'static' }}
          w="100%"
          left="0"
          zIndex="modal"
          hidden={!isOpen}
          bgColor="darkblue"
        >
          {detail && React.cloneElement(detail, { onClose: onClose })}
        </Box>
      </Flex>
    </Box>
  );
}
