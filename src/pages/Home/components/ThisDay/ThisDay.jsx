import React, { useContext, useEffect, useState } from 'react';
import s from './ThisDay.module.sass';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { WeatherContext } from '../../../../context/weatherData';
import timeConverter  from '../../../../model/utils';


export const ThisDay = () => {
  const { weatherData } = useContext(WeatherContext);
  const [cityName, setCityName] = useState('Санкт-Петербург');
  const [temp, setTemp] = useState(20);

  useEffect(() => {
    if (weatherData && weatherData.name) {
      setCityName(weatherData.name);
      setTemp(weatherData.main.temp - 273.15)
    }
  }, [weatherData]); 

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(temp.toFixed(2))}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{timeConverter(Math.floor(Date.now() / 1000))}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{cityName}</span>
        </div>
      </div>
    </div>
  )
}