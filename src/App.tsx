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
import Write from './pages/Write';
import Post from './pages/Post';

function App() {
  return (
    <div>
      <Header />

      <div>
        <Route component={Main} exact path="/" />
        <Route component={Business} path="/business" />
        <Route component={Map} path="/map" />
        <Route component={Bespoke} path="/bespoke" />

        <Switch>
          <Route component={Board} exact path="/board" />
          <Route component={Write} path="/board/write" />
          <Route component={Post} path="/board/post/:pid" />
        </Switch>
        <Route component={Qanda} path="/qanda" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
