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
  const borderColor = useColorModeValue('#CBD5E0', '#2D3748');

  return (
    <Box
      as="li"
      listStyleType="none"
      p="2"
      mb="4"
      borderRadius="md"
      cursor="pointer"
      _hover={{ bgColor: bgColor }}
      bgColor={isSelected ? bgColor : 'transparent'}
      border="2px"
      borderColor={isSelected ? borderColor : 'transparent'}
      onClick={() => onShowDetails(user)}
    >
      <Flex align="center">
        <Avatar name={flatUser.fullName} src={flatUser.avatar} mr="4" />
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            {flatUser.fullName}
          </Text>
          <Text>
            {flatUser.city}, {flatUser.country}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
