import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Characters from './CharactersPage';

jest.mock('../../hooks/useAppHook', () => ({
  __esModule: true,
  default: () => ({
    state: { characters: [{ id: 1, name: 'Rick Sanchez' }] },
    getCharactersList: jest.fn(),
  }),
}));

describe('Given a characters page', () => {
  test('When the page is called, then it should render the characters list', async () => {
    render(<Characters />, { wrapper: MemoryRouter });
    const cardName = screen.getByText('Rick Sanchez');
    expect(cardName).toBeInTheDocument();
  });
});
