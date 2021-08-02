import React from 'react';
import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

export default function UsersListItem({ user, onShowDetails, isSelected }) {
  const flatUser = {
    fullName: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    country: user.location.country,
    avatar: user.picture.thumbnail,
  };

  const bgColor = useColorModeValue('#EDF2F7', '#171923');

  return (
    <Box
      as="li"
      listStyleType="none"
      px="2"
      py="3"
      mb="2"
      borderRadius="md"
      cursor="pointer"
      _hover={{ bgColor: bgColor }}
      bgColor={isSelected ? bgColor : 'transparent'}
      onClick={() => onShowDetails(user)}>
      <Flex align="center">
        <Avatar name={flatUser.fullName} src={flatUser.avatar} mr="4" />
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            {flatUser.fullName}
          </Text>
          <Text color="gray.500">
            {flatUser.city}, {flatUser.country}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
