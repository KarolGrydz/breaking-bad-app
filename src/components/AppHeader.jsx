import React from 'react';
import { InputSearch } from '../containers/InputSearch';
import Logo from '../assets/img/logo.png';

export const AppHeader = () => {
  return (
    <>
      <img src={Logo} alt="img" style={{ margin: '35px 0' }} />
      <InputSearch />
    </>
  );
};
