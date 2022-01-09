import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const UnauthenticatedApp = lazy(() => import('./pages/index/UnauthenticatedApp'));

const AuthenticatedApp = lazy(() => import('./pages/index/AuthenticatedApp'));

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading...</p>}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
