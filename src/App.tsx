import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Business from './pages/Business';
import Map from './pages/Map';
import Board from './pages/Board';
import Qanda from './pages/Qanda';
import Main from './pages/Main';
import Bespoke from './pages/Bespoke';
import Write from '../src/pages/Write';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <Header />

      <div>
        <Route component={Main} exact path="/" />
        <Route component={Business} path="/business" />
        <Route component={Map} path="/map" />
        <Route component={Bespoke} path="/bespoke" />
        <Route component={Signin} path="/signin" />
        <Switch>
          <Route component={Board} exact path="/board" />
          <Route component={Write} path="/board/write" />
        </Switch>

        <Route component={Qanda} path="/qanda" />
        <Route Componet={Write} path="/board/write" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
