import React, { useContext, useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.sass';
import { WeatherContext } from '../../../../context/weatherData';
import { dayTime } from '../../../../model/utils';


export const Card = ({day, numbDay}) => {
  const { weatherFive } = useContext(WeatherContext);
  const {day_common, day_info, icon_id, temp_day, temp_night, info} = day;

  const [dayInfo, setDayInfo] = useState(20);
  const [feelsLikeTemp, setFeelsLikeTemp] = useState(17);

  useEffect(() => {
    if (weatherFive) {
      setDayInfo(dayTime(weatherFive.list[0].dt_txt, numbDay))
    }
  }, [weatherFive]);

  return (
    <div className={s.card}>
        <div className={s.day}>{day_common}</div>
        <div className={s.day__info}>{dayInfo}</div>
        <div className={s.img}>
            <GlobalSvgSelector id={icon_id} />
        </div>
        <div className={s.temp__day}>{temp_day}</div>
        <div className={s.temp__night}>{temp_night}</div>
        <div className={s.info}>{info}</div>
    </div>
  )
}