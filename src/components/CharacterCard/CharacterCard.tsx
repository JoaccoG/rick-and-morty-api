import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './CharacterCard.css';
import { FC, useContext } from 'react';
import { Character } from '../../types/appInterfaces';
import { Link } from 'react-router-dom';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import useFavoriteData from '../../hooks/useFavoritesData';
import AppContext from '../../store/contexts/app.context';

interface CharacterCardProps {
  character: Character;
  icon: IconName;
}

const CharacterCard: FC<CharacterCardProps> = ({ character, icon }) => {
  const { addFavCharacter, removeFavCharacter } = useFavoriteData();
  const { state } = useContext(AppContext);
  const { favCharacters } = state;

  return (
    <article className="characters-card__container">
      <section className="characters-card__img-and-fav">
        <span>#{character.id}</span>
        {icon === 'star' ? (
          <FontAwesomeIcon
            className={`fav-icon ${
              favCharacters.find((favCharac) => favCharac.id === character.id)
                ? 'fav-icon--in-favorites'
                : ''
            }`}
            icon={solid('star')}
            onClick={() => addFavCharacter(character.id)}
            data-testid="button-1"
          />
        ) : (
          <FontAwesomeIcon
            className="fav-icon"
            icon={solid('xmark')}
            onClick={() => removeFavCharacter(character.id)}
            data-testid="button-2"
          />
        )}
        <img src={character.image} alt={`avatar of ${character.name}`} />
        <Link to={`/characters/${character.id}`}>
          <FontAwesomeIcon
            className="fav-icon go-to-details"
            icon={solid('right-to-bracket')}
          />
        </Link>
      </section>
      <section className="characters-card__info">
        <h2 className="character__name">{character.name}</h2>
        <div className="character__other-data">
          <p>Specie:</p>
          <span>- {character.species}</span>
          <p role={'paragraph'}>Status:</p>
          <span>- {character.status}</span>
        </div>
      </section>
    </article>
  );
};

export default CharacterCard;
