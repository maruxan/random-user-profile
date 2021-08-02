import React from 'react';
import { Box, Button } from '@chakra-ui/react';

import UsersListItem from './usersListItem';

export default function UsersList({ onOpen, onUserSelect, users }) {
  // Show user details
  const showUserDetails = user => {
    onUserSelect(user);
    onOpen();
  };

  return (
    <Box as="ul" p="4">
      <Button onClick={onOpen}>Open Detail</Button>
      {users.map(user => (
        <UsersListItem
          key={user.login.uuid}
          user={user}
          onClick={() => showUserDetails(user)}
        />
      ))}
    </Box>
  );
}
