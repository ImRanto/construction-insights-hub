import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { reportLovableError } from '@/lib/lovable-error-reporting';
import { NotFound } from '@/components/not-found';
import { ErrorBoundary } from '@/components/error-boundary';
import { MainLayout as Layout } from '@/layouts/main-layout';
import { HomePage } from '@/pages/home';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <ErrorBoundary>
            <Toaster />
          </ErrorBoundary>
        </RouterProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;