import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import ToDo from './ToDo';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ToDo} />
        <Route path="/about" component={Aboutus} />
        <Route path="/contact" component={Contactus} />
      </Switch>
    </Router>
  );
}

export default App;