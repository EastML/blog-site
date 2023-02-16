import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageContainer from './layout/PageContainer';
import HomePage from './pages/homePage/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageContainer />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
