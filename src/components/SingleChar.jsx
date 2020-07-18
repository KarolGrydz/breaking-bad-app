import React, { useEffect, useState } from 'react';
import '../assets/sass/card.scss';
import { oneCharacter, deathCountByCharacter } from '../helpers/bbApi';
import { Typography, Modal, Grid } from '@material-ui/core';

export const SingleChar = ({ id }) => {
  const [char, updateChar] = useState({});
  const [death, updateDeath] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    (async function () {
      if (true) {
        const oneChar = await oneCharacter(id);
        updateChar(oneChar[0]);
      }
    })();
  }, []);

  const handleOpen = () => {
    console.log(char.name);
    setOpen(!open);
  };

  return (
    <div className='card'>
      <div className='card-inner' onClick={handleOpen}>
        <div className='card-front'>
          <img src={char.img} alt='character picture' />
        </div>
        <div className='card-back'>
          <Typography variant='subtitle1'>
            <b>Name:</b> {char.name}
          </Typography>{' '}
          <Typography variant='subtitle1'>
            <b>Nickname:</b> {char.nickname}
          </Typography>{' '}
          <Typography variant='subtitle1'>
            <b>Birthday:</b> {char.birthday}
          </Typography>{' '}
          <Typography variant='subtitle1'>
            <b>Alive:</b> {char.status}
          </Typography>{' '}
          <Typography variant='subtitle1'>
            <i>Click for more informations</i>
          </Typography>{' '}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className='modal'
      >
        <div className='items'>
          <div className='item'>
            <img src={char.img} alt='character picture' />
          </div>
          <div className='item'>
            <h3>{char.nickname}</h3>
            <p>
              <b>Name:</b>
              {char.name}
            </p>
            <p>
              <b>Nickname:</b>
              {char.nickname}
            </p>
            <p>
              <b>Birthday:</b>
              {char.birthday}
            </p>
            <p>
              <b>Alive:</b>
              {char.status}
            </p>
            <p>
              <b>Breaking Bad Seasons:</b>
              {char.appearance &&
                char.appearance.map((item) => <a key={item}> {item},</a>)}
            </p>
            <p>
              <b>Better Call Saul Season:</b>
              {char.better_call_saul_appearance ? (
                char.better_call_saul_appearance.length != 0 ? (
                  char.better_call_saul_appearance.map((item) => (
                    <a key={item}>{item}</a>
                  ))
                ) : (
                  <a>Not appear</a>
                )
              ) : (
                <a>Not appear</a>
              )}
            </p>
            <p>
              <b>Occupation:</b>
              {char.occupation &&
                char.occupation.map((item) => <a key={item}> {item},</a>)}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
