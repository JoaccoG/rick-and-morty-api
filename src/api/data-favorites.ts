import { Character, FavCharacter } from '../types/appInterfaces';

interface FavoriteCharacterName {
  name: string;
}
interface FavoriteCharacterRating {
  rating: number;
}

export const getFavoriteCharacters = async () => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters`
  );
  const favoriteCharactersList: FavCharacter[] = await response.json();
  return favoriteCharactersList;
};

export const addFavoriteCharacter = async (character: Character) => {
  const newJsonData = { rating: 0 };
  const mergedData = { ...character, ...newJsonData };

  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(mergedData),
    }
  );
  return response.status;
};

export const changeFavoriteCharacterName = async (
  characterId: number,
  characterName: FavoriteCharacterName
) => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters/${characterId}`,
    {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(characterName),
    }
  );
  return response.status;
};

export const setFavoriteCharacterRating = async (
  characterId: number,
  characterRating: FavoriteCharacterRating
) => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters/${characterId}`,
    {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(characterRating),
    }
  );
  return response.status;
};

export const removeFavoriteCharacter = async (characterId: number) => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters/${characterId}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    }
  );
  return response.status;
};
