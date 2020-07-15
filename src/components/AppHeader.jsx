import React from 'react';
import { InputSearch } from '../containers/InputSearch';
import { Container } from '@material-ui/core';
import Logo from '../assets/img/logo.png';

export const AppHeader = () => {
  return (
    <Container>
      <img src={Logo} alt='img' style={{ margin: '35px 0' }} />
      <InputSearch />
    </Container>
  );
};
