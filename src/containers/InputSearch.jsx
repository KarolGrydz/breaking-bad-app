import React, { useContext } from 'react';
import Input from '@material-ui/core/Input';
import { DispatchContext } from '../context/StateContext';
import { getCharacterByName } from '../helpers/bbApi';

import '../assets/sass/input.scss';

export const InputSearch = () => {
  const dispatch = useContext(DispatchContext);

  const onChange = async (e) => {
    const char = await getCharacterByName(e.target.value);
    dispatch({ type: 'updateCharList', payload: char });
    dispatch({ type: 'updateItemsOnPage', payload: 1 });
    dispatch({ type: 'updatePaginationSites', payload: char });
  };

  return (
    <div>
      <form noValidate autoComplete="off">
        <Input
          placeholder="Search for character"
          inputProps={{ 'aria-label': 'character search' }}
          variant="filled"
          className="search-bar"
          onChange={onChange}
        />
      </form>
    </div>
  );
};
