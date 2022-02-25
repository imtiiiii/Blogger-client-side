import './App.css';
import Slider from './Components/Carousel/Slider';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Write from './Pages/Write/Write';
function App() {
  return (
    <Router>
      <Home />
      <Write />
    </Router>

  );
}

export default App;
