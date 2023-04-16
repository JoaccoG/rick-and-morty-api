import { FC, Reducer, useMemo, useReducer } from "react";
import { AppActions } from "../actions/actions";
import { AppState } from "../../types/appInterfaces";
import appReducer from "../reducers/appReducer";
import AppContext from "./app.context";

interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AppProvider: FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<AppState, AppActions>>(
    appReducer,
    {
      planets: [],
      characters: [],
      planetDetails: {
        id: 0,
        name: "",
        type: "",
        dimension: "",
        created: "",
        residents: [""],
      },
      characterDetails: {
        id: 0,
        name: "",
        status: "",
        species: "",
        gender: "",
        created: "",
        image: "",
        url: "",
      },
      currentPagePlanets: 1,
      currentPageCharacters: 1,
      favCharacter: {
        id: 0,
        name: "",
        status: "",
        species: "",
        gender: "",
        image: "",
        url: "",
        created: "",
        rating: 0,
      },
      favCharacters: [],
    }
  );

  const value = useMemo(() => ({ state, dispatch }), []);
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};

export default AppProvider;
