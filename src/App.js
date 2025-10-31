
import './App.css';
import Nav from './component/Nav.js';
import Cards from './component/Cards.js'; 
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import weather from './component/weather.js';
import about from './component/about.js';
import Home from './component/Home.js';
import Footer from './component/Footer.js'; 
function App() {
  return (
    <Router>
    <div className="background-container">
      <Nav/>
      
      <weather/>
      <Routes>
        <Route path="/" Component={Home}exact/>
        <Route path="/home" Component={Home}exact/> 
        <Route path="/crops" Component={Cards}exact/>
        <Route path="/weather" Component={weather}exact/>
        <Route path="/about" Component={about}exact/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
