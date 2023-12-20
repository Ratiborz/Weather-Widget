import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global-container">
       {/* <Popup /> */} 
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

/*async function apiRequests() {
  try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Калинковичи&appid=aa302d9baf187e648240b52a933d9fdc&lang=ru`;
      const response = await fetch(url);

      const data = await response.json();
      return console.log(data);
  } catch (error) {
      console.error('Error fetching data: ', error);
  }
}
apiRequests(); */