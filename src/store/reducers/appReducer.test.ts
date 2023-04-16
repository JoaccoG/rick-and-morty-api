import { AppState } from '../../types/appInterfaces';
import { ActionTypes, AppActions } from '../actions/actions';
import appReducer from './appReducer';

describe('Given the app reducer', () => {
  const mockDefault: AppState = {
    planets: [],
    characters: [],
    planetDetails: {
      id: 0,
      name: '',
      type: '',
      dimension: '',
      created: '',
      residents: [''],
    },
    characterDetails: {
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      created: '',
      image: '',
      url: '',
    },
    currentPagePlanets: 1,
    currentPageCharacters: 1,
    favCharacter: {
      id: 1,
      name: '',
      status: '',
      species: '',
      gender: '',
      created: '',
      image: '',
      url: '',
      rating: 0,
    },
    favCharacters: [],
  };
  const mockPlanets: AppState['planets'] = [];
  const mockCharacters: AppState['characters'] = [];
  const mockFavCharacters: AppState['favCharacters'] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      created: '',
      gender: '',
      image: '',
      rating: 0,
      species: '',
      status: '',
      url: '',
    },
  ];

  test("When the reducer goes to default case, then the new state shouldn't change", () => {
    const defaultAction = {
      type: '',
    };
    const updateState = appReducer(
      mockDefault,
      defaultAction as unknown as AppActions
    );
    expect(updateState).toEqual(mockDefault);
  });

  test('When the reducer receives GET_CHARACTERS action, then the state of the global context should change', () => {
    const charactersAction: AppActions = {
      type: ActionTypes.GET_CHARACTERS,
      payload: mockCharacters,
    };
    const updateState = appReducer(mockDefault, charactersAction);
    expect(updateState).toEqual(mockDefault);
  });

  test('When the reducer receives GET_PLANETS action, then the state of the global context should change', () => {
    const planetsAction: AppActions = {
      type: ActionTypes.GET_PLANETS,
      payload: mockPlanets,
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState).toEqual(mockDefault);
  });

  test('When the reducer receives NEXT_PAGE_CHARACTERS action, then the pagination should be one number higher than before', () => {
    const charactersAction: AppActions = {
      type: ActionTypes.NEXT_PAGE_CHARACTERS,
      payload: 10,
    };
    const updateState = appReducer(mockDefault, charactersAction);
    expect(updateState.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters + 1
    );
  });

  test('When the reducer receives PREV_PAGE_CHARACTERS action, then the pagination should be one number lower than before', () => {
    const charactersAction: AppActions = {
      type: ActionTypes.PREV_PAGE_CHARACTERS,
    };
    const updateState = appReducer(mockDefault, charactersAction);
    expect(updateState.currentPageCharacters).toBe(1);
  });

  test('When the reducer receives NEXT_PAGE_PLANETS action, then the pagination should be one number higher than before', () => {
    const planetsAction: AppActions = {
      type: ActionTypes.NEXT_PAGE_PLANETS,
      payload: 10,
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState.currentPagePlanets).toBe(
      mockDefault.currentPagePlanets + 1
    );
  });

  test('When the reducer receives PREV_PAGE_PLANETS action, then the pagination should be one number lower than before', () => {
    const planetsAction: AppActions = {
      type: ActionTypes.PREV_PAGE_PLANETS,
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState.currentPagePlanets).toBe(1);
  });

  test("When the reducer receives NEXT_PAGE_CHARACTERS action and the actual page is the highest, then the pagination shouldn't change", () => {
    const charactersAction: AppActions = {
      type: ActionTypes.NEXT_PAGE_CHARACTERS,
      payload: 1,
    };
    const updateState = appReducer(mockDefault, charactersAction);
    expect(updateState.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters
    );
  });

  test("When the reducer receives NEXT_PAGE_PLANETS action and the actual page is the highest, then the pagination shouldn't change", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.NEXT_PAGE_PLANETS,
      payload: 1,
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState.currentPagePlanets).toBe(mockDefault.currentPagePlanets);
  });

  test("When the reducer receives PREV_PAGE_CHARACTERS action and the actual page is the lowest, then the pagination shouldn't change", () => {
    const charactersAction: AppActions = {
      type: ActionTypes.PREV_PAGE_CHARACTERS,
    };

    const updateState = appReducer(mockDefault, charactersAction);
    expect(updateState.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters
    );
  });

  test("When the reducer receives PREV_PAGE_PLANETS action and the actual page is the lowest, then the pagination shouldn't change", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.PREV_PAGE_PLANETS,
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState.currentPagePlanets).toBe(mockDefault.currentPagePlanets);
  });

  test('When the reducer receives GET_CHARACTER_DETAILS action, then the state should change with the selected character', () => {
    const charactersAction: AppActions = {
      type: ActionTypes.GET_CHARACTER_DETAILS,
      payload: mockCharacters[0],
    };
    const updateState = appReducer(mockDefault, charactersAction);
    expect(updateState.characterDetails).toEqual(mockCharacters[0]);
  });

  test('When the reducer receives GET_PLANET_DETAILS action, then the state should change with the selected planet', () => {
    const planetsAction: AppActions = {
      type: ActionTypes.GET_PLANET_DETAILS,
      payload: mockPlanets[0],
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState.planetDetails).toEqual(mockCharacters[0]);
  });

  test('When the reducer receives UPDATE_FAV_CHARACTERS action, then the state should with the new favorite characters data', () => {
    const favCharactersAction: AppActions = {
      type: ActionTypes.UPDATE_FAV_CHARACTERS,
      payload: mockFavCharacters,
    };
    expect(mockDefault.favCharacters).toHaveLength(0);
    const updateState = appReducer(mockDefault, favCharactersAction);
    expect(updateState.favCharacters).toHaveLength(1);
  });
});
