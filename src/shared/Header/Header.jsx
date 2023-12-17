import React from 'react';
import s from './Header.module.sass';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';


export const Header = () => {
  const options = [
    { value: 'city-1', label: 'Минск' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Санкт-Петербург' }
  ]

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.20)',
      width: '194px',
      height: '37',
      border: 'none',
      borderRadius: '10px',
      zIndex: '10'
    })
  }

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
              <GlobalSvgSelector id="header-logo" />
            </div>
            <p className={s.title}>React weather</p>
        </div>
        <div className={s.wrapper}>
          <div className={s.change_theme}> 
            <GlobalSvgSelector id="change-theme" />
          </div>
          <Select defaultValue={options[0]} styles={colorStyles} options={options} />
        </div>
    </header>
  )
}