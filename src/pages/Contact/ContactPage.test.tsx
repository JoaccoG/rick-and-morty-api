import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('Given a contact page', () => {
  test('When the page is called, then it should have a heading and a paragraph init', () => {
    render(<ContactPage />);
    const headingElement = screen.getByRole('heading');
    const paragraphElement = screen.getByRole('paragraph');
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
