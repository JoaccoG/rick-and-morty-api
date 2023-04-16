import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Character } from '../../types/appInterfaces';
import CharacterList from './CharacterList';

describe('Given a CharactersList component', () => {
  const mockCharacters: Character[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      created: '',
      gender: '',
      image: '',
      species: '',
      status: '',
      url: '',
    },
    {
      id: 2,
      name: 'Morty Smith',
      created: '',
      gender: '',
      image: '',
      species: '',
      status: '',
      url: '',
    },
  ];

  test('When the component renders, then it should render as many character cards as given by props', () => {
    render(<CharacterList characters={mockCharacters} />, {
      wrapper: MemoryRouter,
    });
    const characterCards = screen.getAllByRole('listitem');
    expect(characterCards.length).toBe(mockCharacters.length);
  });
});
