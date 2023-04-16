import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Given a page layout component', () => {
  test("When a component that's using the layout renders, then the header and footer should be rendered too", () => {
    render(<Layout />, { wrapper: MemoryRouter });
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
