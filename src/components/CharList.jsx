import React, { useEffect, useState } from 'react';
import { getCharacters } from '../helpers/bbApi';
import { SingleChar } from './SingleChar';
import { Container, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import '../assets/sass/pagination.scss';

export const CharList = () => {
  const [charList, updateCharList] = useState([]);
  const [sites, updateSite] = useState(1);
  const [currentPage, updateCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);
  const [itemsOnPage, updateItemsOnPage] = useState([]);
  useEffect(() => {
    (async function () {
      if (true) {
        const charList = await getCharacters();
        updateCharList(charList);
        updateSite(Math.ceil(charList.length / itemPerPage));
        updateItemsOnPage(charList.slice(0, itemPerPage));
      }
    })();
  }, []);

  const paginationMoves = (e, page) => {
    updateCurrentPage(page);
    const itemsOnPage = charList.slice(
      page * itemPerPage - itemPerPage,
      page * itemPerPage
    );
    updateItemsOnPage(itemsOnPage);
    console.log(itemsOnPage);
  };

  return (
    <Container>
      <Grid item container justify='center' alignItems='center' spacing={3}>
        {itemsOnPage.map((char) => (
          <Grid item md={3} sm={6} xs={12} key={char.char_id}>
            <SingleChar
              key={char.char_id}
              name={char.name}
              nickname={char.nickname}
              birthday={char.birthday}
              img={char.img}
              status={char.status}
              appearance={char.appearance}
              better_call_saul_appearance={char.better_call_saul_appearance}
              occupation={char.occupation}
            />
          </Grid>
        ))}
        <Pagination
          count={sites}
          onChange={paginationMoves}
          variant='outlined'
          className='pagination'
        />
      </Grid>
    </Container>
  );
};
