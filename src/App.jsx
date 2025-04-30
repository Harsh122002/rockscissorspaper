import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import Rule from './page/rule';
import HowToPlay from './page/HowToPlay';
import Header from './page/header';
import Login from './page/login';
import Register from './page/register';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/rule" element={<PrivateRoute element={<Rule />} />} />
        <Route path="/howtoplay" element={<PrivateRoute element={<HowToPlay />} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
