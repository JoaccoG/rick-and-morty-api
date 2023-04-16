import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Given a title component', () => {
  test('When the component is called, it should be in the document', () => {
    render(<Title text="Title" />);
    const testTitle = screen.getByText('Title');
    expect(testTitle).toBeInTheDocument();
  });
});
