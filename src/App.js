import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from './components/layout/layout';
import UsersList from './components/usersList/usersList';
import UserDetail from './components/userDetail/userDetail';

function App() {
  const master = <UsersList />;
  const detail = <UserDetail />;

  return (
    <ChakraProvider theme={theme}>
      <Layout master={master} detail={detail} />
    </ChakraProvider>
  );
}

export default App;
