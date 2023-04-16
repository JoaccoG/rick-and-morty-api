import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppContext from '../../store/contexts/app.context';
import AppProvider from '../../store/contexts/app.provider';
import CharacterDetailsPage from './CharacterDetailsPage';

const mockContext = {
  state: {
    planets: [],
    characters: [],
    planetDetails: {
      id: 1,
      name: 'Earth (C-137)',
      type: '',
      dimension: '',
      created: '',
      residents: [''],
    },
    characterDetails: {
      id: 1,
      name: 'Rick Sanchez',
      status: '',
      species: '',
      gender: '',
      created: '',
      image: '',
      url: '',
    },
    currentPagePlanets: 1,
    currentPageCharacters: 1,
    favCharacters: [],
    favCharacter: {
      id: 1,
      name: 'Rick Sanchez',
      status: '',
      species: '',
      gender: '',
      created: '',
      image: '',
      url: '',
      rating: 0,
      location: {
        name: '',
        url: '',
      },
    },
  },
  dispatch: jest.fn(),
};

describe('Given a character details page', () => {
  test('When the page is called, it should render with the proper id details', async () => {
    render(
      <MemoryRouter
        initialEntries={[
          `/characters/${mockContext.state.characterDetails.id}`,
        ]}
      >
        <AppContext.Provider value={mockContext}>
          <AppProvider>
            <CharacterDetailsPage />
          </AppProvider>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const characterDetailsContainer = await screen.findByRole('article');
    expect(characterDetailsContainer).toBeInTheDocument();
  });
});
