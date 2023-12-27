import React, { useContext, useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.sass';
import { WeatherContext } from '../../../../context/weatherData';
import { FindDayCommon, dayTime, findDescription, findIcon, findMaxTemperature, findMinTemperature } from '../../../../model/utils';


export const Card = ({numbDay}) => {
  const { weatherFive } = useContext(WeatherContext);

  const [dayCommon, setDayCommon] = useState('Сегодня');
  const [dayInfo, setDayInfo] = useState(20);
  const [iconId, setIconId] = useState('Clear');
  const [maxTemp, setMaxTemp] = useState(17);
  const [minTemp, setMinTemp] = useState(13);
  const [description, setDescription] = useState('Облачно');

  useEffect(() => {
    if (weatherFive) {
      setDayCommon(FindDayCommon(weatherFive.list, numbDay));
      setDayInfo(dayTime(weatherFive.list[0].dt_txt, numbDay));
      setIconId(findIcon(weatherFive.list, numbDay));
      setMaxTemp(findMaxTemperature(weatherFive.list, numbDay));
      setMinTemp(findMinTemperature(weatherFive.list, numbDay));
      setDescription(findDescription(weatherFive.list, numbDay));
    }
  }, [weatherFive]);

  return (
    <div className={s.card}>
        <div className={s.day}>{dayCommon}</div>
        <div className={s.day__info}>{dayInfo}</div>
        <div className={s.img}>
            <GlobalSvgSelector id={iconId} />
        </div>
        <div className={s.temp__day}>{maxTemp}°</div>
        <div className={s.temp__night}>{minTemp}°</div>
        <div className={s.info}>{description}</div>
    </div>
  )
}