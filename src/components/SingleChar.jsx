import React, { useEffect, useState } from 'react';
import '../assets/sass/card.scss';
import { oneCharacter } from '../helpers/bbApi';
import { Typography, Modal, Grid } from '@material-ui/core';

export const SingleChar = ({ id }) => {
  const [char, updateChar] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    (async function () {
      if (true) {
        const oneChar = await oneCharacter(id);
        // console.log(oneChar[0]);
        updateChar(oneChar[0]);
      }
    })();
  }, []);

  const handleOpen = () => {
    setOpen(true);
    console.log('open');
  };

  const handleClose = () => {
    setOpen(false);
    console.log('close');
  };

  return (
    <div className="card">
      <div className="card-inner" onClick={handleOpen}>
        <div className="card-front">
          <img src={char.img} alt="character picture" />
        </div>
        <div className="card-back">
          <Typography variant="subtitle1">
            <b>Name:</b> {char.name}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Nickname:</b> {char.nickname}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Birthday:</b> {char.birthday}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Alive:</b> {char.status}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <i>Click for more informations</i>
          </Typography>{' '}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#003300',
        }}
      >
        <Grid item>
          <Grid item md={6} sm={6} xs={12} style={{ textAlign: 'center' }}>
            <img
              src={char.img}
              alt="character picture"
              style={{ height: '200px', width: '200px' }}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            {char.name}
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};
