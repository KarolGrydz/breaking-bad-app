import React from 'react';

export const ItemModal = ({
  name,
  nickname,
  occupation,
  better_call_saul_appearance,
  appearance,
  status,
  birthday,
  img,
  death,
  quotes,
}) => {
  return (
    <div className='items'>
      <div className='item'>
        <img src={img} alt='face' />
      </div>
      <div className='item'>
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
          {appearance && appearance.map((item) => <a key={item}> {item},</a>)}
        </p>
        <p>
          <b>Better Call Saul Season: </b>
          {better_call_saul_appearance.length != 0 ? (
            better_call_saul_appearance.map((item) => (
              <a key={item}> {item},</a>
            ))
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
  );
};
