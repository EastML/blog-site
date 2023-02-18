import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageContainer from './layout/PageContainer';
import BookPage from './pages/book/BookPage';
import HobbiesPage from './pages/hobbies/HobbiesPage';
import HomePage from './pages/home/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageContainer />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/books',
          element: <BookPage />
        },
        {
          path: '/hobbies',
          element: <HobbiesPage />
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
