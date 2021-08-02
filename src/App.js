import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Layout from './components/layout/layout';
import UsersList from './components/usersList/usersList';
import UserDetail from './components/userDetail/userDetail';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch users on page load
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=50')
      .then(({ data }) => {
        setUsers(data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const master = (
    <UsersList
      users={users}
      onUserSelect={user => setCurrentUser(user)}
      currentUser={currentUser}
    />
  );
  const detail = currentUser ? <UserDetail user={currentUser} /> : null;

  return (
    <ChakraProvider theme={theme}>
      <Layout master={master} detail={detail} />
    </ChakraProvider>
  );
}

export default App;
