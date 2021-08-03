import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path='/about' exact>
        <About />
      </Route>
      <Route path='/projects' exact>
        <Projects />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
