import AppProvider from '@/providers/app';
import { AppRoutes } from '@/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
