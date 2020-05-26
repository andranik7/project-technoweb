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
import { Login, Register } from "./components/Login/index";
import { ProductList } from './components/Troc/main';
import { Product } from './components/Troc/product';
import { AdviceList } from './components/Advices/main';

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
           <ProductList /> 
         </Route>
         <Route path="/product">
            <Product />
          </Route>
          <Route path="/conseils">
           <AdviceList /> 
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
