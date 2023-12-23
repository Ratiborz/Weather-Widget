import React, { createContext } from 'react';

export const WeatherContext = createContext();

function WeatherDataContext() {

  /*const value = {
    weatherData
  }*/

  return (
    <WeatherContext.Provider /*value={value}*/></WeatherContext.Provider>
  )
}

export default WeatherDataContext;
