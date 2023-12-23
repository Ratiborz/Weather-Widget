import React, { useContext, useEffect, useState } from 'react';
import s from './ThisDay.module.sass';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { WeatherDataContext } from '../../../../shared/Header/Header';


export const ThisDay = () => {
  const [cityName, setCityName] = useState('Санкт-Петербург');
  const [temp, setTemp] = useState(20);

 /* useEffect(() => {
    if (weatherData && weatherData.name) {
      setCityName(weatherData.name);
      setTemp(weatherData.main.temp - 273.15)
      //console.log(weatherData)
    }
  }, [weatherData]); */

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
          Время: <span>21:55</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{cityName}</span>
        </div>
      </div>
    </div>
  )
}