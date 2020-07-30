import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './compnents/navbar';
import Home from './compnents/home'
import About from './compnents/about'
import User from './compnents/user'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
