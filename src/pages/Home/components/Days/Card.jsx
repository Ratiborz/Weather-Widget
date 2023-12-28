import React, { useContext, useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.sass';
import { WeatherContext } from '../../../../context/weatherData';
import { FindDayCommon, dayTime, findDescription, findIcon, findMaxTemperature, findMinTemperature } from '../../../../model/utils';


export const Card = ({numbDay}) => {
  const { weatherFive } = useContext(WeatherContext);

  const [weatherData, setWeatherData] = useState({
    dayCommon: "Сегодня",
    dayInfo: 20,
    iconId: "Clear",
    maxTemp: 17,
    minTemp: 13,
    description: "Облачно",
  });

  useEffect(() => {
    if (weatherFive) {
      const newWeatherData = {
        dayCommon: FindDayCommon(weatherFive.list, numbDay),
        dayInfo: dayTime(weatherFive.list[0].dt_txt, numbDay),
        iconId: findIcon(weatherFive.list, numbDay),
        maxTemp: findMaxTemperature(weatherFive.list, numbDay),
        minTemp: findMinTemperature(weatherFive.list, numbDay),
        description: findDescription(weatherFive.list, numbDay),
      };
  
      setWeatherData(prevWeatherData => ({ ...prevWeatherData, ...newWeatherData }));
    }
  }, [weatherFive]);

  return (
    <div className={s.card}>
        <div className={s.day}>{weatherData.dayCommon}</div>
        <div className={s.day__info}>{weatherData.dayInfo}</div>
        <div className={s.img}>
            <GlobalSvgSelector id={weatherData.iconId} />
        </div>
        <div className={s.temp__day}>{weatherData.maxTemp}°</div>
        <div className={s.temp__night}>{weatherData.minTemp}°</div>
        <div className={s.info}>{weatherData.description}</div>
    </div>
  )
}