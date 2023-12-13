import React from 'react';
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.sass';

export const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
              <GlobalSvgSelector id="header-logo"/>
            </div>
            <p className={s.title}>React weather</p>
        </div>
        <div className={s.wrapper}></div>
    </header>
  )
}