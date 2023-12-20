import React from 'react';
import s from './Days.module.sass';


export const Tabs = () => {
  const tabs = [
    {
      value: 'На 5 дней',
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>{
        tabs.map((tab) =>
          <div className={s.tab + ' ' + s.active} key={tab.value}>{tab.value}</div>
        )
      }</div>
      <button className={s.cancel}>Отменить</button>
    </div>
  )
}