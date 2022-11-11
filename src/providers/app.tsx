import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@/lib/auth';
import { queryClient } from '@/lib/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ErrorFallback() {
  return (
    <div
      className='text-red-500 w-screen h-screen flex flex-col justify-center items-center'
      role='alert'
    >
      <h2 className='text-lg font-semibold'>Ooops, something went wrong :( </h2>
      Refresh
    </div>
  );
}

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className='flex items-center justify-center w-screen h-screen'>
          {/*<Spinner size="xl" />*/}
        </div>
      }
    >
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.DEV && <ReactQueryDevtools />}
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default AppProvider;
