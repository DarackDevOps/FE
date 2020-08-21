import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css";
import { Route } from "react-router-dom";
import Business from "./pages/Business";
import Map from "./pages/Map";
import Board from "./pages/Board";
import Qanda from "./pages/Qanda";
import Main from "./pages/Main";
function App() {
  return (
    <>
      <Header />
      {/* spa 가 아닌 링크타고 넘어가는 걸로 바꾸자. */}
      <div>
        <Route component={Main} exact path="/" />
        <Route component={Business} path="/business" />
        <Route component={Map} path="/map" />
        <Route component={Board} path="/board" />
        <Route component={Qanda} path="/qanda" />
      </div>
      {/* 메인 페이지 구성. */}

      <Footer />
    </>
  );
}

export default App;
