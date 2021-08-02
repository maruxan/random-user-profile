import React from 'react';
import { Avatar, Box, Flex, VStack, Text, HStack } from '@chakra-ui/react';

export default function UsersListItem({ user }) {
  console.log(user);
  const flatUser = {
    fullName: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    country: user.location.country,
    avatar: user.picture.thumbnail,
  };

  return (
    <Box as="li" listStyleType="none" p="2" my="3">
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
