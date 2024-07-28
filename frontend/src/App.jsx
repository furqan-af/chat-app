import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './components/Home';
import DashBoard from './pages/DashBoard';
import { useAuth } from './context/AuthContext';
import Error from './components/Error';

function App() {

const ProtectedRoute = ({ component: Component }) => {
  const { authState } = useAuth();
  // console.log(authState);
  return authState.token || authState.isAuthenticated ? <Component /> : <Login />;
};

  return (
    <Router>
      <Navbar />
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoute component={DashBoard} />} />
        <Route path='*' element = {<Error/>}  />
      </Routes>
    </Router>
  );
}

export default App;
