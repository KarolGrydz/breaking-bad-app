import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../context/StateContext';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';

export const AppPagination = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { paginationSites } = state;
  return (
    <Grid item container justify="center" alignItems="center">
      <Pagination
        count={paginationSites}
        onChange={(event, page) =>
          dispatch({ type: 'updateItemsOnPage', payload: page })
        }
        variant="outlined"
        className="pagination"
      />
    </Grid>
  );
};
