import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'animate.css';
import './App.css';

// Pages
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Alumni from './pages/Alumni/Alumni.js';
import Events from './pages/Events/Events.js';
import Career from './pages/Career/Career.js';
import Resources from './pages/Resources/Resources.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/alumni" component={Alumni} />
        <Route exact path="/hiring" component={Career} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/resources" component={Resources} />
      </Switch>
    </Router>
  );
}

export default App;
