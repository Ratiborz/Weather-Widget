export function requestFiveDaysWeather(weatherData) {
  if (weatherData) {
    return new Promise((resolve, reject) => {
      const latitude = weatherData.coord.lat;
      const longitude = weatherData.coord.lon;
      
      // Вызываем асинхронную функцию requestFiveDays и обрабатываем результаты
      requestFiveDays(latitude, longitude)
        .then(data => {
          // В случае успеха разрешаем обещание с полученными данными
          resolve(data);
        })
        .catch(error => {
          // В случае ошибки отклоняем обещание с ошибкой
          reject(error);
        });
    });
  } 
  else {
    alert('Введите название города')
  }
}

async function requestFiveDays(latitude, longitude) {
  try {
      const url = `${process.env.REACT_APP_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&lang=ru`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
  }
}