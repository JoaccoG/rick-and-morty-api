import AppProvider from './store/contexts/app.provider';
import { RouterProvider } from 'react-router-dom';
import router from './router/app-router';
import './App.css';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
