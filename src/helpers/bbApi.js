import axios from 'axios';
const baseUrl = 'https://www.breakingbadapi.com/api/';
const charactersUrl = `characters/`;
const breakingBadCharUrl = `characters?category=Breaking+Bad`;
const betterCallSaulCharUrl = `characters?category=Better+Call+Saul`;
const byName = `?name=`;
const episodes = `episodes`;
const qoutes = `quote?author=`;
const deathCounts = `death-count?name=`;

export const getCharacters = async () => {
  try {
    const result = await axios
      .get(baseUrl + charactersUrl)
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deathCountByCharacter = async (name) => {
  try {
    const result = await axios
      .get(`${baseUrl}${deathCounts}${name}`)
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const qoutesByCharacter = async (name) => {
  try {
    const result = await axios
      .get(`${baseUrl}${qoutes}${name}`)
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.error(error);
  }
};
