import React from 'react';
import s from './Days.module.sass';
import { Card } from './Card';


export const Days = () => {
  const days = [
    {
        day_common: 'Сегодня',
        day_info: '28 авг',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
      {
        day_common: 'Завтра',
        day_info: '29 авг',
        icon_id: 'small_rain_sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'небольшой дождь и солнце',
      },
      {
        day_common: 'Ср',
        day_info: '30 авг',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'небольшой дождь',
      },
      {
        day_common: 'Чт',
        day_info: '28 авг',
        icon_id: 'mainly_cloudy',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
      {
        day_common: 'Пт',
        day_info: '28 авг',
        icon_id: 'rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
      {
        day_common: 'Сб',
        day_info: '28 авг',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
      {
        day_common: 'Вс',
        day_info: '28 авг',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      }
  ]
  return (
    <div className={s.days}>{
        days.map((day) => (
            <Card key={day.day_common} day={day} />
        )) 
    }</div>
  )
}