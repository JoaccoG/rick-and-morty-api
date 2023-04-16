import { render, screen } from '@testing-library/react';
import NotFound from './NotFoundPage';
import { MemoryRouter } from 'react-router-dom';

describe('Given a NotFound page component', () => {
  test('When the user goes to a not found route, then the NotFound page should render', () => {
    render(<NotFound />, { wrapper: MemoryRouter });
    const paragraphElement = screen.getByRole('paragraph');
    expect(paragraphElement).toBeInTheDocument();
  });
});
