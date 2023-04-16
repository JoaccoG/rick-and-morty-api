import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../types/appInterfaces';
import { Title } from '../Title/Title';
import './CharacterDetails.css';

interface CharacterDetailsProps {
  character: Character;
}

const CharacterDetails: FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <>
      <article className="character-details__container">
        <Title text={`${character.name}`} cssClass="character-details__title" />
        <section className="character-details__sprites">
          <Link to={'/planets'}>
            <img
              className="c-d-sprite__planet"
              src={`/assets/img/planet-${
                Math.floor(Math.random() * 15) + 1
              }.png`}
              alt={`planet of ${character.name}`}
            />
          </Link>
          <Link to={'/characters'}>
            <img
              className="c-d-sprite__avatar"
              src={character.image}
              alt={`avatar of ${character.name}`}
            />
          </Link>
        </section>
        <section className="character-details__info">
          <p role={'paragraph'}>Status</p>
          <span data-testid="character-status">{character.status}</span>
          <p>Specie</p>
          <span>{character.species}</span>
          <p>Gender</p>
          <span>{character.gender}</span>
          <p>Created</p>
          <span>{character.created}</span>
        </section>
      </article>
    </>
  );
};

export default CharacterDetails;
