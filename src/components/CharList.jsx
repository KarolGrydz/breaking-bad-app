import React, { useEffect, useState } from 'react';
import { getCharactersId } from '../helpers/bbApi';
import { SingleChar } from './SingleChar';

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
    <div>
      <h1>Here will be list</h1>
      {charListIds.map((id) => (
        <SingleChar id={id} key={id} />
      ))}
    </div>
  );
};
