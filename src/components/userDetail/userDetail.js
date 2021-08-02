import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SlideFade,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

import DetailListItem from './detailListItem';
import DetailList from './detailList';

export default function UserDetail({ onClose, isOpen, user, clearUser }) {
  const flatUser = {
    id: user.login.uuid,
    username: user.login.username,
    email: user.email,
    fullName: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    country: user.location.country,
    avatar: user.picture.thumbnail,
    image: user.picture.large,
    age: user.dob.age,
    gender: user.gender,
    address: `${user.location.street.number} ${user.location.street.name}`,
    cell: user.cell,
  };

  // Subtitle color
  const subColor = useColorModeValue('gray.400', 'gray.600');

  // Close detail view and clears current user
  const closeDetailHandler = () => {
    onClose();
    clearUser();
  };

  return (
    <SlideFade h="full" in={isOpen} offsetY="0" offsetX={-8}>
      <Flex align="center">
        <Button onClick={closeDetailHandler} mr="4">
          <FaArrowLeft />
        </Button>
        <Text fontSize="xl">User Details</Text>
      </Flex>
      <Box my="6">
        <Image
          alt={flatUser.fullName}
          src={flatUser.image}
          boxSize="200px"
          borderRadius="full"
          mx="auto"
          boxShadow="md"
        />
        <Box mt="4">
          <Heading as="h1" fontSize="4xl" textAlign="center" mb="2">
            {flatUser.username}
          </Heading>
          <Text fontSize="sm" color={subColor} textAlign="center">
            {flatUser.id}
          </Text>
        </Box>
      </Box>
      <DetailList heading="Personal Info">
        <DetailListItem
          subColor={subColor}
          label="NAME"
          text={flatUser.fullName}
        />
        <DetailListItem subColor={subColor} label="AGE" text={flatUser.age} />
        <DetailListItem
          subColor={subColor}
          label="GENDER"
          text={flatUser.gender.toUpperCase()}
        />
        <DetailListItem
          subColor={subColor}
          label="ADDRESS"
          text={flatUser.address}
        />
        <DetailListItem subColor={subColor} label="CITY" text={flatUser.city} />
        <DetailListItem
          subColor={subColor}
          label="COUNTRY"
          text={flatUser.country}
        />
      </DetailList>
      <DetailList heading="Contact Info">
        <DetailListItem
          subColor={subColor}
          label="EMAIL"
          text={flatUser.email}
        />
        <DetailListItem
          subColor={subColor}
          label="CELLPHONE"
          text={flatUser.cell}
        />
      </DetailList>
    </SlideFade>
  );
}
