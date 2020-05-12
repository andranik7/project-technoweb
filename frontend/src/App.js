import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Troc from "./pages/Troc"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>

          

          <Route path="/troc">
            <Troc />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
