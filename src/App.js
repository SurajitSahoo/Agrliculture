
import './App.css';
import Nav from './component/Nav.js';
import Cards from './component/Cards.js'; 
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import weather from './component/weather.js';
import about from './component/about.js';
function App() {
  return (
    <Router>
    <div className="background-container">
      <Nav/>
      {/* <Cards/> */}
      <weather/>
      <Routes>
        {/* <Route path="/" Component={Nav}exact/> */}
        <Route path="/crops" Component={Cards}exact/>
        <Route path="/weather" Component={weather}exact/>
        <Route path="/about" Component={about}exact/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
