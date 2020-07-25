import React, { useEffect, useContext } from 'react';
import { getCharacters } from '../helpers/bbApi';
import { SingleChar } from './SingleChar';
import { Grid } from '@material-ui/core';
import { StateContext, DispatchContext } from '../context/StateContext';
import Spinner from '../assets/img/spinner.gif';

import '../assets/sass/spinner.scss';

export const CharList = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { itemOnPage, allItems } = state;
  useEffect(() => {
    (async function () {
      if (allItems.length) return;
      const charList = await getCharacters();
      dispatch({ type: 'updateCharList', payload: charList });
      dispatch({ type: 'updatePaginationSites', payload: charList });
      dispatch({ type: 'updateItemsOnPage', payload: 1 });
    })();
  }, [allItems.length, dispatch]);

  return (
    <>
      <Grid
        item
        container
        spacing={3}
        className={itemOnPage.length ? `list-items-ok` : `list-items`}
        justify='center'
        alignItems='center'
      >
        {itemOnPage.map((char) => (
          <Grid item md={3} sm={6} xs={12} key={char.char_id}>
            <SingleChar key={char.char_id} {...char} />
          </Grid>
        ))}
      </Grid>
      <Grid>
        <img
          className={itemOnPage.length ? `spinner` : `spinner-ok`}
          src={Spinner}
          alt='Spinner'
        />
      </Grid>
    </>
  );
};
