import { useEffect } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import useAppHook from '../../hooks/useAppHook';

const Characters = () => {
  const { state, getCharactersList } = useAppHook();

  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);

  return (
    <>
      <CharacterList characters={state.characters} />
    </>
  );
};

export default Characters;
