import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'animate.css';
import './App.css';

// Pages
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Team from './pages/Team/Team.js';
import Events from './pages/Events/Events.js';
import Career from './pages/Career/Career.js';
import Research from './pages/Research/Research.js';
import ResearchArticle from './pages/Research/ResearchArticle.jsx';
import Resources from './pages/Resources/Resources.js';
import Consults from './pages/Consults/Consults';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/hiring" element={<Career/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/research/:page" element={<ResearchArticle/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/resources" element={<Resources/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
