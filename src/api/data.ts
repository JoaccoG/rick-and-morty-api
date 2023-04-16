import { Characters, Character, Planets, Planet } from '../types/appInterfaces';

export const getPlanetsData = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  const planetsData: Planets = await response.json();
  const planetsList: Planet[] = planetsData.results;
  return planetsList;
};

export const getCharactersData = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const charactersData: Characters = await response.json();
  const charactersList: Character[] = charactersData.results;
  return charactersList;
};

export const getPlanetById = async (id: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/${id}`
  );
  const planetData: Planet = await response.json();
  return planetData;
};

export const getCharacterById = async (id: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const characterData: Character = await response.json();
  return characterData;
};
