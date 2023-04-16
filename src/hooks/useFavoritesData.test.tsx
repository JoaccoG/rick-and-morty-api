import { act, renderHook } from '@testing-library/react';
import useFavoriteData from './useFavoritesData';

const mockCharacter = { id: 1, name: 'Rick Sanchez' };

describe('Given a useFavoriteData custom hook', () => {
  test('removeFavCharacter removes a character from favorites', async () => {
    const { result } = renderHook(() => useFavoriteData());

    await act(async () => {
      await result.current.addFavCharacter(mockCharacter.id);
    });
    await act(async () => {
      await result.current.removeFavCharacter(mockCharacter.id);
    });

    expect(result.current.state.favCharacters).toEqual([]);
  });
});
