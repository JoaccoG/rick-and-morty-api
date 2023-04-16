import { render, screen } from '@testing-library/react';
import Contact from './Contact';
describe('Given a Contact component', () => {
  test('When the component renders, then it should be an article element in the document', () => {
    render(<Contact />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
