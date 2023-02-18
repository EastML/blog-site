import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageContainer from './layout/PageContainer';
import BookPage from './pages/book/BookPage';
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
        }
      ]
    }
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
