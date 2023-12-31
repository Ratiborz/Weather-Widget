function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let hour = a.getHours();
  let min = String(a.getMinutes()).padStart(2, '0');
  let time = `${hour}:${min}`;
  return time;
}

export function windConfig(speed, deg) {
  let description = "";
  if (speed < 5) {
    description = "легкий ветер";
  } else if (speed >= 5 && speed < 10) {
    description = "умеренный ветер";
  } else if (speed >= 10 && speed < 15) {
    description = "свежий ветер";
  } else {
    description = "сильный ветер";
  }
  
  // Преобразование направления из градусов в направление
  let direction = "";
  switch (deg) {
    case (deg >= 337.5 || deg < 22.5):
       direction = "северное";
    case (deg >= 22.5 && deg < 67.5): 
      direction = "северо-восточное";
    case (deg >= 67.5 && deg < 112.5): 
      direction = "восточное";
    case (deg >= 112.5 && deg < 157.5): 
      direction = "юго-восточное";
    case (deg >= 157.5 && deg < 202.5): 
      direction = "южное";
    case (deg >= 202.5 && deg < 247.5): 
      direction = "юго-западное";
    case (deg >= 247.5 && deg < 292.5): 
      direction = "западное";
    case (deg >= 292.5 && deg < 337.5): 
      direction = "северо-западное";
    default:
      direction = "неизвестное направление";
  }

  return `${Math.floor(speed)} м/с ${direction} - ${description}`;
}

export function FindDayCommon(forecastData, numbDay) {
  if (numbDay === 0) {
    return 'Сегодня';
  } else if (numbDay === 1) {
    return 'Завтра';
  } else {
    const date = new Date(forecastData[numbDay * 8].dt * 1000);
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return daysOfWeek[date.getDay()];
  }
}

export function dayTime(dt_txt, numbDay) {
  const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const date = new Date(dt_txt);
  date.setDate(date.getDate() + numbDay); // увеличиваем дату на numbDay дней
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
}

export function findMaxTemperature(forecastData, numbDay) {
  const dailyMaxTemperatures = [];

  const todayDate = new Date();
  const targetDate = new Date();
  targetDate.setDate(todayDate.getDate() + numbDay);

  forecastData.forEach((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    if (forecastDate.getDate() === targetDate.getDate()) {
      dailyMaxTemperatures.push(forecast.main.temp_max);
    }
  });
  return Math.floor((Math.max(...dailyMaxTemperatures) - 273.15).toFixed(2));
}

export function findMinTemperature(forecastData, numbDay) {
  const dailyMinTemperatures = [];

  const todayDate = new Date();
  const targetDate = new Date();
  targetDate.setDate(todayDate.getDate() + numbDay);

  forecastData.forEach((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    if (forecastDate.getDate() === targetDate.getDate()) {
      dailyMinTemperatures.push(forecast.main.temp_min);
    }
  });
  return Math.floor((Math.min(...dailyMinTemperatures) - 273.15).toFixed(2));
}

export function findDescription(forecastData, numbDay) {
  const dailyDescriptions = {};

  const todayDate = new Date();
  const targetDate = new Date();
  targetDate.setDate(todayDate.getDate() + numbDay);

  forecastData.forEach((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    if (forecastDate.getDate() === targetDate.getDate()) {
      const dateKey = forecastDate.getDate();
      dailyDescriptions[dateKey] = forecast.weather[0].description;
    }
  });

  return dailyDescriptions[targetDate.getDate()];
}

export function findIcon(forecastData, numbDay) {
  const todayDate = new Date();
  const targetDate = new Date();
  targetDate.setDate(todayDate.getDate() + numbDay);

  for (let i = 0; i < forecastData.length; i++) {
    const forecast = forecastData[i];
    const forecastDate = new Date(forecast.dt * 1000);
    if (forecastDate.getDate() === targetDate.getDate()) {
      return forecast.weather[0].main;
    }
  }
}

export default timeConverter