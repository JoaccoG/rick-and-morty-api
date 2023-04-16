import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { server } from '../mocks/server';
import AppProvider from '../store/contexts/app.provider';
import useAppHook from './useAppHook';

describe('Given an app custom hook', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When the user request a planets list, then the hook should return a planet', async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.getPlanetsList());
    expect(result.current.state.planets[0].id).toBe(1);
  });

  test('When the user request a characters list, then the hook should return a character', async () => {
    interface WrapperProps {
      children: JSX.Element | JSX.Element[];
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.getCharactersList());
    expect(result.current.state.characters[0].id).toBe(1);
  });

  test('When the user paginates planets list, then the hook should update the current page planets', async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.planetsPagination('next'));
    expect(result.current.state.currentPagePlanets).toBe(2);
    await act(async () => result.current.planetsPagination('prev'));
    expect(result.current.state.currentPagePlanets).toBe(1);
  });

  test('When the user paginates characters list, then the hook should update the current page characters', async () => {
    interface WrapperProps {
      children: JSX.Element | JSX.Element[];
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.charactersPagination('next'));
    expect(result.current.state.currentPageCharacters).toBe(2);
    await act(async () => result.current.charactersPagination('prev'));
    expect(result.current.state.currentPageCharacters).toBe(1);
  });

  test('When the user requests details for a character, then the hook should return the details for that character', async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.getCharacterDetails(1));
    expect(result.current.state.characterDetails.id).toBe(1);
  });

  test('When the user requests details for a planet, then the hook should return the details for that planet', async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.getPlanetDetails(1));
    expect(result.current.state.planetDetails.id).toBe(1);
  });
});
