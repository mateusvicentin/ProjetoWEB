import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarProject from './Componentes/NavbarProject';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Usuario from './Componentes/Usuario';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateandUpdate from './Componentes/CreateandUpdate';

function App() {
  return (
    <div className="App">

    <Router>
     <NavbarProject/>
     <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/usuarios" component={Usuario}></Route>
      <Route  path="/usuario/:id" component={CreateandUpdate}></Route>
     </Switch>
     
     <Footer/>
    </Router>
    </div>

  );
}

export default App;
