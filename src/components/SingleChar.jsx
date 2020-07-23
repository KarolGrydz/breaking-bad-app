import React, { useEffect, useState } from 'react';
import '../assets/sass/card.scss';
import { deathCountByCharacter, qoutesByCharacter } from '../helpers/bbApi';
import { Typography, Modal } from '@material-ui/core';

export const SingleChar = ({
  name,
  nickname,
  occupation,
  better_call_saul_appearance,
  appearance,
  status,
  birthday,
  img,
}) => {
  const [death, updateDeath] = useState([]);
  const [quotes, updateQuotes] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let isCanceled = false;
    (async function () {
      if (true) {
        const strName = name.replace(' ', '+');
        const deathCounts = await deathCountByCharacter(strName);
        const bestQoutes = await qoutesByCharacter(strName);
        if (isCanceled) {
          updateDeath(deathCounts[0].deathCount);
          updateQuotes(bestQoutes.slice(0, 9));
        }
      }
    })();
    return () => {
      isCanceled = true;
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="card">
      <div className="card-inner" onClick={handleOpen}>
        <div className="card-front">
          <img src={img} alt="character picture" />
        </div>
        <div className="card-back">
          <Typography variant="subtitle1">
            <b>Name:</b> {name}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Nickname:</b> {nickname}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Birthday:</b> {birthday}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Alive:</b> {status}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <i>Click for more informations</i>
          </Typography>{' '}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        <div className="items">
          <div className="item">
            <img src={img} alt="character picture" />
          </div>
          <div className="item">
            <h2>{nickname}</h2>
            <p>
              <b>Name: </b>
              {name}
            </p>
            <p>
              <b>Nickname: </b>
              {nickname}
            </p>
            <p>
              <b>Birthday: </b>
              {birthday}
            </p>
            <p>
              <b>Alive: </b>
              {status}
            </p>
            <p>
              <b>Breaking Bad Seasons: </b>
              {appearance &&
                appearance.map((item) => <a key={item}> {item},</a>)}
            </p>
            <p>
              <b>Better Call Saul Season: </b>
              {better_call_saul_appearance ? (
                better_call_saul_appearance.length != 0 ? (
                  better_call_saul_appearance.map((item) => (
                    <a key={item}> {item},</a>
                  ))
                ) : (
                  <a>Not appear</a>
                )
              ) : (
                <a>Not appear</a>
              )}
            </p>
            <p>
              <b>Occupation: </b>
              {occupation.map((item) => (
                <a key={item}> {item},</a>
              ))}
            </p>
            <p>
              <b>Number of people killed: </b>
              {death}
            </p>
            <b>Best quotes: </b>
            <ol>
              {quotes.length ? (
                quotes.map((char) => <li key={char.quote_id}>{char.quote}</li>)
              ) : (
                <p>None</p>
              )}
            </ol>
          </div>
        </div>
      </Modal>
    </div>
  );
};
