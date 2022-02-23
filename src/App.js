import './App.css';
import Slider from './Components/Carousel/Slider';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Home />
    </Router>

  );
}

export default App;
