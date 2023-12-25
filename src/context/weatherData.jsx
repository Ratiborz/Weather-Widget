import React, { createContext, useContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherDataContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherFive, setWeatherFive] = useState(null);

  return (
    <WeatherContext.Provider value={{weatherData, setWeatherData, weatherFive, setWeatherFive}}>{ children }</WeatherContext.Provider>
  )
}

//export const useWeatherDataContext = () => useContext(WeatherDataContextProvider);

export default WeatherDataContextProvider;