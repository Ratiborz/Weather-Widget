import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Home } from "./pages/Home/Home";
import { Header } from "./pages/shared/Header/Header";

function App() {
  return <div className="container">
    <Header />
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/month-statistics" exact element={<MonthStatistics/>} />
    </Routes>
  </div> 
}

export default App; 

/*async function apiRequests() {
  try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=8&appid=aa302d9baf187e648240b52a933d9fdc`;
      const response = await fetch(url);

      const data = await response.json();
      return console.log(data);
  } catch (error) {
      console.error('Error fetching data: ', error);
  }
}
apiRequests();*/