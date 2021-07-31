import React from 'react';
import { Button } from '@chakra-ui/react';

export default function UsersList({ onOpen }) {
  return (
    <>
      <Button onClick={onOpen}>Open Detail</Button>
    </>
  );
}
