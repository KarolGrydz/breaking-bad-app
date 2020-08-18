import React, { useEffect, useState } from 'react';
import { deathCountByCharacter, qoutesByCharacter } from '../helpers/bbApi';
import { Typography, Modal } from '@material-ui/core';
import { ItemModal } from './ItemModal';

export const SingleChar = (props) => {
  const [death, updateDeath] = useState([]);
  const [quotes, updateQuotes] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isCanceled = false;
    (async function () {
      if (!props.name.length) return;
      const strName = props.name.replace(' ', '+');
      const deathCounts = await deathCountByCharacter(strName);
      const bestQoutes = await qoutesByCharacter(strName);
      if (!isCanceled) updateDeath(deathCounts[0].deathCount);
      if (!isCanceled) updateQuotes(bestQoutes.slice(0, 9));
    })();
    return () => {
      isCanceled = true;
    };
  }, [props.name]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="card">
      <div className="card-inner" onClick={handleOpen}>
        <div className="card-front">
          <img src={props.img} alt="face" />
        </div>
        <div className="card-back">
          <Typography variant="subtitle1">
            <b>Name:</b> {props.name}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Nickname:</b> {props.nickname}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Birthday:</b> {props.birthday}
          </Typography>{' '}
          <Typography variant="subtitle1">
            <b>Alive:</b> {props.status}
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
        <div>
          <ItemModal {...props} death={death} quotes={quotes} />
        </div>
      </Modal>
    </div>
  );
};
