import React from 'react';
import s from './Days.module.sass';
import { Card } from './Card';
import { Tabs } from './Tabs';


export const Days = ({showDays, setShowDays}) => {
  const days = [
      {
        day_common: 'Сегодня',
        day_info: '20 дек',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
      {
        day_common: 'Завтра',
        day_info: '21 дек',
        icon_id: 'small_rain_sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'небольшой дождь и солнце',
      },
      {
        day_common: 'Ср',
        day_info: '22 дек',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'небольшой дождь',
      },
      {
        day_common: 'Чт',
        day_info: '23 дек',
        icon_id: 'mainly_cloudy',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
      {
        day_common: 'Пт',
        day_info: '24 дек',
        icon_id: 'rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
  ]
  return (
    <>
    <Tabs showDays={showDays} setShowDays={setShowDays} />
    {showDays && (
      <div className={s.days}>{
          days.map((day, index) => (
              <Card key={day.day_common} numbDay={index} />
          )) 
      }</div>
    )}
    </>
  )
}