import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Given a Header component', () => {
  test('When the app renders, then it should be in the document', () => {
    render(<App />);
    let headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});
