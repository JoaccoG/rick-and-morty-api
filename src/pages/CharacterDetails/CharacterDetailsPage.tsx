import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import useAppHook from '../../hooks/useAppHook';
import AppContext from '../../store/contexts/app.context';

const CharacterDetailsPage = () => {
  const { getCharacterDetails } = useAppHook();
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { characterDetails } = state;

  useEffect(() => {
    getCharacterDetails(Number(id));
  }, [id, getCharacterDetails]);

  return (
    <>
      <CharacterDetails character={characterDetails} />
    </>
  );
};

export default CharacterDetailsPage;
