import React, { useEffect, useState } from 'react';
import { oneCharacter } from '../helpers/bbApi';
import { Container, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    height: '300px',
    '&:hover': {
      transform: 'rotateY(180deg)',
    },
  },
  cardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
  },
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
  },
});

export const SingleChar = ({ id }) => {
  const [char, updateChar] = useState({});
  const classes = useStyles();
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
        variant='outlined'
        elevation={3}
        style={{ backgroundColor: '#003300', color: '#e0e0e0' }}
        className={classes.card}
      >
        <div className={classes.cardFront}>
          <img
            src={char.img}
            alt=''
            style={{
              height: 'auto',
              maxWidth: '100%',
              display: 'block',
              margin: 'auto',
            }}
          />
        </div>
        <div className={classes.cardBack}>{char.name}</div>
        {/* <Typography variant="h5">My name is {char.name}</Typography>{' '} */}
      </Paper>
    </Container>
  );
};
