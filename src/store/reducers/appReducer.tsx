import { ActionTypes, AppActions } from '../actions/actions';
import { AppState } from '../../types/appInterfaces';

const appReducer = (state: AppState, action: AppActions): AppState => {
  const {
    currentPagePlanets: planetsPages,
    currentPageCharacters: charactersPages,
  } = state;

  switch (action.type) {
    // Planets actions
    case ActionTypes.GET_PLANETS:
      return { ...state, planets: action.payload };
    case ActionTypes.GET_PLANET_DETAILS:
      return { ...state, planetDetails: action.payload };
    case ActionTypes.NEXT_PAGE_PLANETS:
      return planetsPages < action.payload
        ? { ...state, currentPagePlanets: planetsPages + 1 }
        : { ...state, currentPagePlanets: planetsPages };
    case ActionTypes.PREV_PAGE_PLANETS:
      return planetsPages > 1
        ? { ...state, currentPagePlanets: planetsPages - 1 }
        : { ...state, currentPagePlanets: planetsPages };

    // Characters actions
    case ActionTypes.GET_CHARACTERS:
      return { ...state, characters: action.payload };
    case ActionTypes.GET_CHARACTER_DETAILS:
      return { ...state, characterDetails: action.payload };
    case ActionTypes.NEXT_PAGE_CHARACTERS:
      return charactersPages < action.payload
        ? { ...state, currentPageCharacters: charactersPages + 1 }
        : { ...state, currentPageCharacters: charactersPages };
    case ActionTypes.PREV_PAGE_CHARACTERS:
      return charactersPages > 1
        ? { ...state, currentPageCharacters: charactersPages - 1 }
        : { ...state, currentPageCharacters: charactersPages };

    // Favorite characters actions
    case ActionTypes.UPDATE_FAV_CHARACTERS:
      return { ...state, favCharacters: action.payload };

    default:
      return state;
  }
};

export default appReducer;
