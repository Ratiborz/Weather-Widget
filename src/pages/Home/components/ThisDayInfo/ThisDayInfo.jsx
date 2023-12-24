import React, { useContext, useEffect, useState } from 'react';
import s from './ThisDayInfo.module.sass';
import cloud from '../../../../assets/images/Cloud.png'
import { ThisDayItem } from './ThisDayItem'
import { WeatherContext } from '../../../../context/weatherData';
import { windConfig } from '../../../../model/utils';

export const ThisDayInfo = () => {
  const { weatherData } = useContext(WeatherContext);

  const [temp, setTemp] = useState(20);
  const [feelsLikeTemp, setFeelsLikeTemp] = useState(17);
  const [pressure, setPressure] = useState(755);
  const [humidity, setHumidity] = useState(47);
  const [wind, setWind] = useState('3 м/с юго-запад - легкий ветер');

  useEffect(() => {
    if (weatherData) {
      setTemp(Math.floor((weatherData.main.temp - 273.15).toFixed(2)));
      setFeelsLikeTemp(Math.floor((weatherData.main.feels_like - 273.15).toFixed(2)));
      setPressure(Math.floor(0.750062 * weatherData.main.pressure));
      setHumidity(weatherData.main.humidity);
      setWind(windConfig(weatherData.wind.speed, weatherData.wind.deg));
    }
  }, [weatherData]);

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
      value: `${wind}`,
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