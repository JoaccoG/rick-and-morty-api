import { FC } from 'react';
import { Character } from '../../types/appInterfaces';
import CharacterCard from '../CharacterCard/CharacterCard';
import Pagination from '../Pagination/Pagination';
import { Title } from '../Title/Title';
import './CharacterList.css';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <article className="characters__container">
      <Title text="Characters" />
      <Pagination typeOfPagination={'characters'} />
      <ul className="characters__list">
        {characters.map((character) => (
          <li key={`${character.id}-${character.name}`}>
            <CharacterCard character={character} icon={'star'} />
          </li>
        ))}
      </ul>
      <Pagination typeOfPagination={'characters'} />
    </article>
  );
};

export default CharacterList;
