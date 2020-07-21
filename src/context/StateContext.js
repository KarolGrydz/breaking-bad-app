import React, { useState } from 'react';
import { useImmerReducer } from 'use-immer';
import { initialState } from './initialState';
import { paginationReducer } from './paginationReducer';

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

export const ContextControler = ({ children }) => {
  const [state, dispatch] = useImmerReducer(paginationReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
