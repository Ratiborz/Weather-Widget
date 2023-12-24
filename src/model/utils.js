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
  let direction = "неизвестное направление";
  if (deg >= 337.5 || deg < 22.5) {
      direction = "северное";
  } else if (deg >= 22.5 && deg < 67.5) {
      direction = "северо-восточное";
  } else if (deg >= 67.5 && deg < 112.5) {
      direction = "восточное";
  } else if (deg >= 112.5 && deg < 157.5) {
      direction = "юго-восточное";
  } else if (deg >= 157.5 && deg < 202.5) {
      direction = "южное";
  } else if (deg >= 202.5 && deg < 247.5) {
      direction = "юго-западное";
  } else if (deg >= 247.5 && deg < 292.5) {
      direction = "западное";
  } else if (deg >= 292.5 && deg < 337.5) {
      direction = "северо-западное";
  }
  
  return `${Math.floor(speed)} м/с ${direction} - ${description}`;
}

export default timeConverter