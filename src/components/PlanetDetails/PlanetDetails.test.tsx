import { render, screen } from '@testing-library/react';
import PlanetDetails from './PlanetDetails';

describe('Given a PlanetDetails component', () => {
  test('When the PlanetDetails render, then it should have the component in it', () => {
    render(<PlanetDetails />);
    const pElementsList = screen.getAllByRole('paragraph');
    expect(pElementsList.length).toBe(4);
    expect(pElementsList[0]).toBeInTheDocument();
  });
});
