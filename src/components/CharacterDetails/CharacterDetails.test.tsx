import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

const mockCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: '',
  gender: '',
  image: '',
  url: '',
  created: '',
};

describe('Given a character details component', () => {
  test('When the component is rendered, then there should be a paragraph in the document', () => {
    render(<CharacterDetails character={mockCharacter} />, {
      wrapper: MemoryRouter,
    });
    const paragraphElement = screen.getByRole('paragraph');
    expect(paragraphElement).toBeInTheDocument();
  });

  test('When the component is rendered, then the character info should be displayed', () => {
    render(<CharacterDetails character={mockCharacter} />, {
      wrapper: MemoryRouter,
    });
    const characterStatus = screen.getByTestId('character-status');
    expect(characterStatus).toHaveTextContent('Alive');
  });
});
