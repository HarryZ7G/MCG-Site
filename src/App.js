import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'animate.css';
import './App.css';

// Pages
import Home from './pages/Home/Home.js';
import About from './pages/About/About';
import Events from './pages/Events/Events.js';
import Services from './pages/Services/Services.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
