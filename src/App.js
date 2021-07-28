// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Events from './pages/Events/Events.js';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/events" component={Events}/>
      </Switch>
    </Router>
  );
}

export default App;
