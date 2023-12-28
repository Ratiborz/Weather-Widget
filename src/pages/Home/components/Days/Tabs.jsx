import React, { useContext, useState } from 'react';
import s from './Days.module.sass';
import { WeatherContext } from '../../../../context/weatherData';
import { requestFiveDaysWeather } from '../../../../model/RequestFiveDays';


export const Tabs = ({showDays, setShowDays}) => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  const { weatherFive, setWeatherFive } = useContext(WeatherContext);

  const tab = 'На 5 дней';

  const handleFiveDaysWeather = async () => {
    const data = await requestFiveDaysWeather(weatherData);
    if (data) {
      setShowDays(true);
    }
    setWeatherFive(data);
  }

  const cancelFiveDaysForecast = () => {
      setShowDays(false);
  }

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        <div className={s.tab + ' ' + s.active} onClick={handleFiveDaysWeather} >{tab}</div>
      </div>
      <button className={s.cancel} onClick={cancelFiveDaysForecast} >Отменить</button>
    </div>
  )
}