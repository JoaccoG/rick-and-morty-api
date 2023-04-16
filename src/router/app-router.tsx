import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import NotFound from '../pages/NotFound/NotFoundPage';
import Characters from '../pages/Characters/CharactersPage';
import Home from '../pages/Home/HomePage';
import CharacterDetailsPage from '../pages/CharacterDetails/CharacterDetailsPage';
import ContactPage from '../pages/Contact/ContactPage';
import Favorites from '../pages/Favorites/FavoritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'characters',
        element: <Characters />,
      },
      {
        path: 'characters/:id',
        element: <CharacterDetailsPage />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
