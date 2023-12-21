import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";
//import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/month-statistics" exact element={MonthStatistics} />
        </Routes>
      </div> 
    </div>
  )
}

export default App; 