import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppContext from '../../store/contexts/app.context';
import { AppState } from '../../types/appInterfaces';
import Favorites from './FavoritesPage';

describe('Given a favorites page', () => {
  test('When the page renders and there are no favorites, then it should display only the title and a paragraph', () => {
    render(<Favorites />);
    const titleElement = screen.getByText('Favorites');
    const paragraphElement = screen.getByRole('paragraph');
    expect(titleElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });

  test("When the page renders and there are favorite characters, then there should be a text with the character's name", () => {
    const mockState: AppState = {
      favCharacters: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: '',
          species: '',
          gender: '',
          image: '',
          url: '',
          created: '',
          rating: 0,
        },
      ],
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
    };

    render(
      <MemoryRouter>
        <AppContext.Provider value={{ state: mockState, dispatch: () => {} }}>
          <Favorites />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const characterName = screen.getByText('Rick Sanchez');
    expect(characterName).toBeInTheDocument();
  });
});
