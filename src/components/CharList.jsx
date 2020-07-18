import React, { useEffect, useState } from 'react';
import { getCharactersId } from '../helpers/bbApi';
import { SingleChar } from './SingleChar';
import { Container, Grid } from '@material-ui/core';

export const CharList = () => {
  const [charListIds, updateCharListIds] = useState([]);
  useEffect(() => {
    (async function () {
      if (true) {
        const charList = await getCharactersId();
        updateCharListIds(charList);
      }
    })();
  }, []);
  return (
    <Container>
      <Grid item container justify='center' alignItems='center' spacing={3}>
        {charListIds.map((id) => (
          <Grid item md={3} sm={6} xs={12} key={id}>
            <SingleChar id={id} key={id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
