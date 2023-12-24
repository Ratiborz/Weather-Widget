import React, { useContext } from 'react';
import s from './ThisDayInfo.module.sass';
import cloud from '../../../../assets/images/Cloud.png'
import { ThisDayItem } from './ThisDayItem'
import { WeatherContext } from '../../../../context/weatherData';
import { windConfig } from '../../../../model/utils';

export const ThisDayInfo = () => {
  const { weatherData } = useContext(WeatherContext);

  const temp = Math.floor((weatherData.main.temp - 273.15).toFixed(2));
  const feelsLikeTemp = Math.floor((weatherData.main.feels_like - 273.15).toFixed(2));
  const pressure = Math.floor(0.750062 * weatherData.main.pressure);
  const humidity = weatherData.main.humidity;

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${temp}° - ощущается как ${feelsLikeTemp}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: `${humidity}%`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${windConfig(weatherData.wind.speed, weatherData.wind.deg)}`,
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>{
        items.map((item) => 
          <ThisDayItem key={item.icon_id} item={item} />
        )
      }</div>
      <img src={cloud} alt="cloud" className={s.cloud__img} />
    </div>
  )
}