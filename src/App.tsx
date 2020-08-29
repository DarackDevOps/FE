import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css';
import { Route } from 'react-router-dom';
import Business from './pages/Business';
import Map from './pages/Map';
import Board from './pages/Board';
import Qanda from './pages/Qanda';
import Main from './pages/Main';
import Bespoke from './pages/Bespoke';
function App() {
  return (
    <>
      <Header />

      <Route component={Main} exact path="/" />
      <Route component={Business} path="/business" />
      <Route component={Bespoke} path="/bespoke" />
      <Route component={Map} path="/map" />
      <Route component={Board} path="/board" />
      <Route component={Qanda} path="/qanda" />

      <Footer />
    </>
  );
}

export default App;
