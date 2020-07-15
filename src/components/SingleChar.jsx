import React, { useEffect, useState } from 'react';
import { oneCharacter } from '../helpers/bbApi';

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
    <div>
      <h1>My name is {char.name}</h1>{' '}
    </div>
  );
};
