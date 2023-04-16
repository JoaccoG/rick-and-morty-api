import { Character, FavCharacter, Planet } from '../../types/appInterfaces';

export type AppActions = PlanetActions | CharacterActions | FavoriteActions;

export enum ActionTypes {
  GET_PLANETS = 'getPlanets',
  GET_PLANET_DETAILS = 'getPlanetDetails',
  NEXT_PAGE_PLANETS = 'nextPagePlanets',
  PREV_PAGE_PLANETS = 'prevPagePlanets',

  GET_CHARACTERS = 'getCharacters',
  GET_CHARACTER_DETAILS = 'getCharacterDetails',
  NEXT_PAGE_CHARACTERS = 'nextPageCharacters',
  PREV_PAGE_CHARACTERS = 'prevPageCharacters',

  UPDATE_FAV_CHARACTERS = 'updateFavCharacters',
}

export type PlanetActions =
  | { type: ActionTypes.GET_PLANETS; payload: Planet[] }
  | { type: ActionTypes.GET_PLANET_DETAILS; payload: Planet }
  | { type: ActionTypes.NEXT_PAGE_PLANETS; payload: number }
  | { type: ActionTypes.PREV_PAGE_PLANETS };

export type CharacterActions =
  | { type: ActionTypes.GET_CHARACTERS; payload: Character[] }
  | { type: ActionTypes.GET_CHARACTER_DETAILS; payload: Character }
  | { type: ActionTypes.NEXT_PAGE_CHARACTERS; payload: number }
  | { type: ActionTypes.PREV_PAGE_CHARACTERS };

export type FavoriteActions = {
  type: ActionTypes.UPDATE_FAV_CHARACTERS;
  payload: FavCharacter[];
};
