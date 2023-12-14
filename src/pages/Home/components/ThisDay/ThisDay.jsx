import React from 'react';
import s from './ThisDay.module.sass';


export const ThisDay = () => {
  return (
    <header className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.this__temp}>20</div>
        <div className={s.this__day_day}>Сегодня</div>
      </div>
      <div className={s.bottom__block}>
      <div className={s.this__time}>
        Время: <span>21:55</span>
      </div>
      <div className={s.this__city}>
        Город: <span>Санкт-Петербург</span>
      </div>
      </div>
    </header>
  )
}