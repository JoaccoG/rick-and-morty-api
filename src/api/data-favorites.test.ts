import { server } from '../mocks/server';
import { Character, FavCharacter } from '../types/appInterfaces';
import {
  addFavoriteCharacter,
  changeFavoriteCharacterName,
  getFavoriteCharacters,
  removeFavoriteCharacter,
  setFavoriteCharacterRating,
} from './data-favorites';

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: '',
  species: '',
  gender: '',
  image: '',
  url: '',
  created: '',
};
const mockFavCharacter: FavCharacter = {
  ...mockCharacter,
  rating: 0,
};

describe('Given a Private API call', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When the server respond with a 200, then the expected array should have favorite characters data', async () => {
    const favoriteCharactersList = await getFavoriteCharacters();
    expect(favoriteCharactersList[0]).toEqual(mockFavCharacter);
  });

  test('When the server respond with a 200, then the new character should be added to the list', async () => {
    const newFavoriteCharacter = await addFavoriteCharacter(mockCharacter);
    expect(newFavoriteCharacter).toBe(201);
  });

  test('When the server respond with a 200, then the favorite character should be updated with the new name', async () => {
    const updatedCharacter = await changeFavoriteCharacterName(1, {
      name: 'Morty Smith',
    });
    expect(updatedCharacter).toBe(204);
  });

  test('When the server respond with a 200, then the favorite character should be updated with a rating', async () => {
    const updatedCharacter = await setFavoriteCharacterRating(1, {
      rating: 5,
    });
    expect(updatedCharacter).toBe(204);
  });

  test('When the server respond with a 200, then the character should be removed from the list', async () => {
    // Remove the character
    const response = await removeFavoriteCharacter(mockFavCharacter.id);
    expect(response).toBe(204);
  });
});
