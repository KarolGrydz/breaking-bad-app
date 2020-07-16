import React, { useEffect, useState } from 'react';
import { oneCharacter } from '../helpers/bbApi';
import { Container, Paper, Typography } from '@material-ui/core';

export const SingleChar = ({ id }) => {
  const [char, updateChar] = useState({});
  useEffect(() => {
    (async function () {
      if (true) {
        const oneChar = await oneCharacter(id);
        console.log(oneChar[0]);
        updateChar(oneChar[0]);
      }
    })();
  }, []);
  return (
    <Container>
      <Paper
        variant="outlined"
        elevation={3}
        style={{ backgroundColor: '#003300', color: '#e0e0e0' }}
      >
        <img
          src={char.img}
          alt=""
          style={{
            height: 'auto',
            maxWidth: '100%',
            display: 'block',
            margin: 'auto',
          }}
        />
        {/* <Typography variant="h5">My name is {char.name}</Typography>{' '} */}
      </Paper>
    </Container>
  );
};
