import { useState } from "react";
import { WeatherDataContext } from "../context/weatherData"

export const WeatherProvider = ({children, ...props}) => {
  const [weatherData, setWeatherData] = useState(null);

  return <WeatherDataContext.Provider 
    value={{
      weatherData,
      setWeatherData,
    }}
    {...props}
  >
      {children}
    </WeatherDataContext.Provider>
}