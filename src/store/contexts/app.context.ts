import { createContext, Dispatch } from 'react';
import { AppActions } from '../actions/actions';
import { AppState } from '../../types/appInterfaces';

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<AppActions>;
}

const AppContext = createContext<AppContextProps>({
  state: {
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
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      image: '',
      url: '',
      created: '',
      rating: 0,
    },
    favCharacters: [],
  },
  dispatch: () => {},
});

export default AppContext;
