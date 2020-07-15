import React from 'react';
import { Container } from '@material-ui/core';
import { AppHeader } from './components/AppHeader';
import { CharList } from './components/CharList';

function App() {
  return (
    <div>
      <Container style={{ textAlign: 'center' }} maxWidth='md'>
        <AppHeader />
        <CharList />
      </Container>
    </div>
  );
}

export default App;
