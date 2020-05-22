import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login, Register } from "./components/login/index";
import { Product } from './components/troc/product';


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
         <Route path="/login">
           <Login /> 
         </Route>
         <Route path="/register">
           <Register /> 
         </Route>
         <Route path="/troc">
           <Product /> 
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
