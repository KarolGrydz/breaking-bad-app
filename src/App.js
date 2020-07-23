import React from 'react';
import { Container } from '@material-ui/core';
import { AppHeader } from './components/AppHeader';
import { CharList } from './components/CharList';
import { AppPagination } from './components/AppPagination';

function App() {
  return (
    <Container style={{ textAlign: 'center' }} maxWidth="md">
      <AppHeader />
      <CharList />
      <AppPagination />
    </Container>
  );
}

export default App;
