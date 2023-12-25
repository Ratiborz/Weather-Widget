export function requestFiveDaysWeather(weatherData) {
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

async function requestFiveDays(latitude, longitude) {
  try {
      const url = ` https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=aa302d9baf187e648240b52a933d9fdc&lang=ru`;

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