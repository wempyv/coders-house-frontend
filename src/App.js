import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
