import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/login/Login';
import RegisterForm from './pages/register/Register';
import LandingPage from './pages/landing/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoutes />} >
                <Route path="/home" exact element={<LandingPage />} />
              </Route>
              <Route path="/" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
