import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './HomePage';

describe('Given a home page component', () => {
  test('When the user loads the page, then the page should render entirely', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const paragraphElement = screen.getByRole('paragraph');
    expect(paragraphElement).toBeInTheDocument();
  });
});
