import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

jest.mock('../../hooks/useAppHook', () => {
  const mockPlanetsPagination = jest.fn();
  const mockCharactersPagination = jest.fn();

  return {
    __esModule: true,
    default: () => ({
      planetsPagination: mockPlanetsPagination,
      charactersPagination: mockCharactersPagination,
    }),
    mockPlanetsPagination,
    mockCharactersPagination,
  };
});

describe('Given a pagination component', () => {
  test('When rendering, then it should have the correct props', () => {
    render(<Pagination typeOfPagination="planets" />);
    const containerElement = screen.getByTestId('pag-container');
    const buttonLeft = screen.getByTestId('button-left');
    const buttonRight = screen.getByTestId('button-right');
    expect(containerElement).toBeInTheDocument();
    expect(buttonLeft).toBeInTheDocument();
    expect(buttonRight).toBeInTheDocument();
  });

  test('When clicking left arrow with planets parameter, then it should execute its on-click function', () => {
    const appHook = require('../../hooks/useAppHook');
    const mockPlanetsPagination = appHook.mockPlanetsPagination;

    render(<Pagination typeOfPagination="planets" />);
    userEvent.click(screen.getByTestId('button-left'));
    expect(mockPlanetsPagination).toHaveBeenCalledWith('prev');
  });

  test('When clicking left arrow with characters parameter, then it should execute its on-click function', () => {
    const appHook = require('../../hooks/useAppHook');
    const mockCharactersPagination = appHook.mockCharactersPagination;

    render(<Pagination typeOfPagination="characters" />);
    userEvent.click(screen.getByTestId('button-left'));
    expect(mockCharactersPagination).toHaveBeenCalledWith('prev');
  });

  test('When clicking right arrow with planets parameter, then it should execute its on-click function', () => {
    const appHook = require('../../hooks/useAppHook');
    const mockPlanetsPagination = appHook.mockPlanetsPagination;

    render(<Pagination typeOfPagination="planets" />);
    userEvent.click(screen.getByTestId('button-right'));
    expect(mockPlanetsPagination).toHaveBeenCalledWith('next');
  });

  test('When clicking right arrow with characters parameter, then it should execute its on-click function', () => {
    const appHook = require('../../hooks/useAppHook');
    const mockCharactersPagination = appHook.mockCharactersPagination;

    render(<Pagination typeOfPagination="characters" />);
    userEvent.click(screen.getByTestId('button-right'));
    expect(mockCharactersPagination).toHaveBeenCalledWith('next');
  });
});
