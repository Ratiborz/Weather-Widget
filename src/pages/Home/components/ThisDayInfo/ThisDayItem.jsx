import React from 'react';
import s from './ThisDayInfo.module.sass';
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';

export const ThisDayItem = ({item}) => {
  const {icon_id, name, value} = item
  return ( 
    <div className={s.item}>
        <div className={s.indicator}>
            <IndicatorSvgSelector id={icon_id} />
        </div>
        <div className={s.indicator__name}>{name}</div>
        <div className={s.indicator__value}>{value}</div>
    </div>
  )
}