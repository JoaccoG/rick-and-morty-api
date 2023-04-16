import { useCallback, useContext } from 'react';
import {
  getCharacterById,
  getCharactersData,
  getPlanetById,
  getPlanetsData,
} from '../api/data';
import { ActionTypes, AppActions } from '../store/actions/actions';
import AppContext from '../store/contexts/app.context';

const useAppHook = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentPageCharacters, currentPagePlanets } = state;

  const getPlanetsList = useCallback(async () => {
    const planetsData = await getPlanetsData(currentPagePlanets);
    const initializePlanetsAction: AppActions = {
      type: ActionTypes.GET_PLANETS,
      payload: planetsData,
    };
    dispatch(initializePlanetsAction);
  }, [dispatch, currentPagePlanets]);

  const getCharactersList = useCallback(async () => {
    const charactersData = await getCharactersData(currentPageCharacters);
    const initializeCharactersAction: AppActions = {
      type: ActionTypes.GET_CHARACTERS,
      payload: charactersData,
    };
    dispatch(initializeCharactersAction);
  }, [dispatch, currentPageCharacters]);

  const planetsPagination = async (direction: 'next' | 'prev') => {
    const getNextPlanets: AppActions = {
      type: ActionTypes.NEXT_PAGE_PLANETS,
      payload: 7,
    };
    const getPrevPlanets: AppActions = {
      type: ActionTypes.PREV_PAGE_PLANETS,
    };
    direction === 'next' ? dispatch(getNextPlanets) : dispatch(getPrevPlanets);
  };

  const charactersPagination = async (direction: 'next' | 'prev') => {
    const getNextCharacters: AppActions = {
      type: ActionTypes.NEXT_PAGE_CHARACTERS,
      payload: 42,
    };
    const getPrevCharacters: AppActions = {
      type: ActionTypes.PREV_PAGE_CHARACTERS,
    };
    direction === 'next'
      ? dispatch(getNextCharacters)
      : dispatch(getPrevCharacters);
  };

  const getPlanetDetails = useCallback(
    async (planetid: number) => {
      const planetsData = await getPlanetById(planetid);
      const getPlanetDetails: AppActions = {
        type: ActionTypes.GET_PLANET_DETAILS,
        payload: planetsData,
      };
      dispatch(getPlanetDetails);
    },
    [dispatch]
  );

  const getCharacterDetails = useCallback(
    async (characterid: number) => {
      const charactersData = await getCharacterById(characterid);
      const getCharacterDetails: AppActions = {
        type: ActionTypes.GET_CHARACTER_DETAILS,
        payload: charactersData,
      };
      dispatch(getCharacterDetails);
    },
    [dispatch]
  );

  return {
    state,
    getPlanetsList,
    getCharactersList,
    planetsPagination,
    charactersPagination,
    getPlanetDetails,
    getCharacterDetails,
  };
};

export default useAppHook;
