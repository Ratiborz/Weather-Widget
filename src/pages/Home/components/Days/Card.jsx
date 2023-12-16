import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './Days.module.sass';


export const Card = ({day}) => {
  const {day_common, day_info, icon_id, temp_day, temp_night, info} = day
  return (
    <div className={s.card}>
        <div className={s.day}>{day_common}</div>
        <div className={s.day_info}>{day_info}</div>
        <div className={s.img}>
            <GlobalSvgSelector id={icon_id} />
        </div>
        <div className={s.temp_day}>{temp_day}</div>
        <div className={s.temp_night}>{temp_night}</div>
        <div className={s.info}>{info}</div>
    </div>
  )
}