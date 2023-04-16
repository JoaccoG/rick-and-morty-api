import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Title } from '../../components/Title/Title';
import { useContext } from 'react';
import AppContext from '../../store/contexts/app.context';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './FavoritesPage.css';

const Favorites = () => {
  const { state } = useContext(AppContext);
  const { favCharacters } = state;

  return (
    <>
      <section className="favorites__container">
        <Title text="Favorites" />
        <div className="favorites__filter">
          <button className="favorites-filter__btn">
            <FontAwesomeIcon icon={solid('earth-americas')} />
            <p>Search by planet</p>
            <FontAwesomeIcon icon={solid('angle-down')} />
          </button>
        </div>
        {favCharacters.length === 0 ? (
          <div className="favorites__data--empty">
            <p role={'paragraph'}>
              There doesn't seem to be anything to show here currently, if you
              see a character you want to add to favorites, hit the white star
              so you can see them here, change their name and assign them a
              rating.
            </p>
          </div>
        ) : (
          <div className="favorites__data">
            <ul className="favorites__list">
              {favCharacters.map((character) => (
                <li key={`${character.name}-${character.id}`}>
                  <CharacterCard character={character} icon={'xmark'} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default Favorites;
