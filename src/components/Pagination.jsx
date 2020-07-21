import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import '../assets/sass/pagination.scss';

export const Pagination = () => {
  return (
    <>
      <Pagination
        count={sites}
        onChange={paginationMoves}
        variant="outlined"
        className="pagination"
      />
    </>
  );
};
