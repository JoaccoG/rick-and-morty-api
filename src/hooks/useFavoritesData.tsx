import { useCallback, useContext } from 'react';
import { getCharacterById } from '../api/data';
import {
  addFavoriteCharacter,
  getFavoriteCharacters,
  removeFavoriteCharacter,
} from '../api/data-favorites';
import { ActionTypes, AppActions } from '../store/actions/actions';
import AppContext from '../store/contexts/app.context';
import { Character } from '../types/appInterfaces';

const useFavoriteData = () => {
  const { state, dispatch } = useContext(AppContext);

  const getFavCharacters = useCallback(async () => {
    const favCharactersList = await getFavoriteCharacters();
    const getFavCharactersAction: AppActions = {
      type: ActionTypes.UPDATE_FAV_CHARACTERS,
      payload: favCharactersList,
    };
    dispatch(getFavCharactersAction);
  }, [dispatch]);

  const addFavCharacter = useCallback(
    async (id: number) => {
      const characterToAdd: Character = await getCharacterById(id);
      const status = await addFavoriteCharacter(characterToAdd);
      if (status === 201) {
        await getFavCharacters();
      }
    },
    [getFavCharacters]
  );

  const removeFavCharacter = useCallback(
    async (id: number) => {
      const status = await removeFavoriteCharacter(id);
      if (status === 200) {
        await getFavCharacters();
      }
    },
    [getFavCharacters]
  );

  return {
    state,
    getFavCharacters,
    addFavCharacter,
    removeFavCharacter,
  };
};

export default useFavoriteData;
