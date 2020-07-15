import axios from 'axios';
const baseUrl = 'https://www.breakingbadapi.com/api/';
const charactersUrl = `characters/`;
const breakingBadCharUrl = `characters?category=Breaking+Bad`;
const betterCallSaulCharUrl = `characters?category=Better+Call+Saul`;
const byName = `?name=`;
const episodes = `episodes`;
const qoutes = `quotes/`;
const deathCounts = `death-count?name=`;

export const getCharactersId = async () => {
  try {
    const result = await axios
      .get(baseUrl + charactersUrl)
      .then(({ data }) => data.map((char) => char.char_id));
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const oneCharacter = async (id) => {
  try {
    const result = await axios
      .get(`${baseUrl}${charactersUrl}${id}`)
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.error(error);
  }
};
