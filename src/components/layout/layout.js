import React from 'react';
import {
  Box,
  Flex,
  Text,
  theme,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ui/ColorModeSwitcher';

export default function Layout({ master, detail }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box minH="100vh">
      {/* Header */}
      <Flex
        align="center"
        justify="space-between"
        p="4"
        h="80px"
        w="full"
        bgColor={bgColor}
        pos="fixed"
        zIndex="sticky"
        top="0"
        left="0"
      >
        <Text fontSize="xl">random-user-profile</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      {/* Master/Detail */}
      <Flex mt="80px">
        <Box w={{ base: '100%', lg: '40%', xl: '25%' }}>
          {React.cloneElement(master, { onOpen: onOpen })}
        </Box>
        <Box
          position={{ base: 'absolute' }}
          w={{ base: '100%', lg: '60%', xl: '75%' }}
          right="0"
          zIndex="dropdown"
          hidden={!isOpen}
          bgColor={bgColor}
        >
          {detail && React.cloneElement(detail, { onClose: onClose })}
        </Box>
      </Flex>
    </Box>
  );
}
