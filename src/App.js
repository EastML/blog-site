import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DrawerProvider } from './drawerContext';
import PageContainer from './layout/PageContainer';
import BlogEntryPage from './pages/blog/BlogEntryPage';
import BlogPage from './pages/blog/BlogPage';
import BookPage from './pages/book/BookPage';
import CodingPage from './pages/coding/CodingPage';
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
        },
        {
          path: '/code',
          element: <CodingPage />
        },
        {
          path: '/blog',
          element: <BlogPage />,
        },
        {
          path: '/blog/:blogId',
          element: <BlogEntryPage />
        }
      ]
    }
  ])

  return (
    <DrawerProvider>
      <RouterProvider router={router} />
    </DrawerProvider>
  );
}

export default App;
