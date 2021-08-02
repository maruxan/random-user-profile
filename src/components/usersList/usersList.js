import React from 'react';
import { Box, Button, Spinner } from '@chakra-ui/react';

import UsersListItem from './usersListItem';

export default function UsersList({
  onOpen,
  onUserSelect,
  users,
  currentUser,
  onLoadMore,
  isLoading,
}) {
  // Show user details
  const showUserDetails = (user) => {
    onUserSelect(user);
    onOpen();
  };

  const loadMoreBtn = isLoading ? (
    <Spinner mt="2" d="block" mx="auto" size="lg" />
  ) : (
    <Button onClick={onLoadMore} w="full" mt="2">
      Load More
    </Button>
  );

  return (
    <Box as="ul" p="4" h="90vh" overflowY="scroll">
      {users.map((user) => (
        <UsersListItem
          key={user.login.uuid}
          user={user}
          onShowDetails={showUserDetails}
          isSelected={user === currentUser}
        />
      ))}
      {loadMoreBtn}
    </Box>
  );
}
