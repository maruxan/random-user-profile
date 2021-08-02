import React from 'react';
import { Box } from '@chakra-ui/react';

import UsersListItem from './usersListItem';

export default function UsersList({
  onOpen,
  onUserSelect,
  users,
  currentUser,
}) {
  // Show user details
  const showUserDetails = user => {
    onUserSelect(user);
    onOpen();
  };

  return (
    <Box as="ul" p="4">
      {users.map(user => (
        <UsersListItem
          key={user.login.uuid}
          user={user}
          onShowDetails={showUserDetails}
          isSelected={user === currentUser}
        />
      ))}
    </Box>
  );
}
