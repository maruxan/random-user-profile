import React from 'react';
import { FaRandom } from 'react-icons/fa';
import { Flex, Text } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../ui/ColorModeSwitcher';

export default function Header({ bgColor }) {
  return (
    <Flex
      align="center"
      justify="space-between"
      p="4"
      h="10vh"
      w="full"
      bgColor={bgColor}
      pos="fixed"
      zIndex="sticky"
      top="0"
      left="0"
    >
      <Flex align="center">
        <Text fontSize="xl" mx="2">
          <FaRandom />
        </Text>
        <Text fontSize="xl" mb="5px">
          random-user-profile
        </Text>
      </Flex>
      <ColorModeSwitcher />
    </Flex>
  );
}
