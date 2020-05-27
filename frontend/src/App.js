import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login/login.jsx"
import Register from "./components/Login/register.jsx"
import { ProductList } from './components/Troc/main';
import { Product } from './components/Troc/product';
import { AdviceList } from './components/Advices/main';
import { Profile } from './components/Profile/profile';

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
         <Route path="/profile">
           <Profile /> 
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
