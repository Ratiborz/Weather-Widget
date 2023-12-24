import React, { useContext, useEffect, useState } from 'react';
import s from './Header.module.sass';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { ChangeCssRootVariables } from '../../model/ChangeCssRootVariables';
import { storage } from '../../model/Storage';
import { requestByCity } from '../../model/RequestByCity';
import { WeatherContext } from '../../context/weatherData'

export const Header = () => {

const { weatherData, setWeatherData } = useContext(WeatherContext);

const [theme, setTheme] = useState(storage.getItem('theme') || 'light');
const [city, setCity] = useState('');

function changeStyleInput() {
  return (
    { 
      backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.20)', 
      color: theme === 'dark' ? '#fff' : '#000', 
      "::placeholder": {
          color: theme === 'dark' ? '#ccc' : '#555',
      },
    }
  )
}

function changeTheme() {
  setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
}

useEffect(() => {
  storage.setItem('theme', theme);
  ChangeCssRootVariables(theme);
}, [theme]);

const handleCityChange = (event) => {
  setCity(event.target.value);
};

const handleRequestCity = async () => {
  const data = await requestByCity(city);
  setWeatherData(data);
};

  return (
      <header className={s.header}>
          <div className={s.wrapper}>
              <div className={s.logo}>
                <GlobalSvgSelector id="header-logo" />
              </div>
              <p className={s.title}>React weather</p>
          </div>
          <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}> 
              <GlobalSvgSelector id="change-theme" />
            </div>
            <div className={s.change_theme}> 
              <GlobalSvgSelector id="geolocation" />
            </div>
            <div className={s.send__form}>
              <input className={s.select} placeholder='Город...' value={city} onChange={handleCityChange} type="text" style={changeStyleInput()} />
              <button className={s.send__select} style={changeStyleInput()} onClick={handleRequestCity}> Отправить</button>
            </div>
          </div>
      </header>
  )
}