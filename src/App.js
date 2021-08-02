import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Layout from './components/layout/layout';
import UsersList from './components/usersList/usersList';
import UserDetail from './components/userDetail/userDetail';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then(({ data }) => {
        const fetchedUsers = [...data.results];

        setUsers((prevState) => {
          const newUsers = [...prevState, ...fetchedUsers];
          return newUsers;
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage]);

  const loadMoreUsersHandler = () => {
    setIsLoading(true);
    setCurrentPage(currentPage + 1);
  };

  const master = (
    <UsersList
      users={users}
      onUserSelect={(user) => setCurrentUser(user)}
      currentUser={currentUser}
      onLoadMore={loadMoreUsersHandler}
      isLoading={isLoading}
    />
  );
  const detail = currentUser ? (
    <UserDetail user={currentUser} clearUser={() => setCurrentUser(null)} />
  ) : null;

  return (
    <ChakraProvider theme={theme}>
      <Layout master={master} detail={detail} />
    </ChakraProvider>
  );
}

export default App;
