export function requestByGeo() {
  return new Promise((resolve, reject) => {
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const dataGeo = await requestGeolocation(latitude, longitude);
          resolve(dataGeo); // Возвращаем данные через resolve
        } catch (error) {
          reject(error); // Отправляем ошибку через reject
        }
      }, (error) => {
        reject(new Error(`Ошибка получения геопозиции: ${error.message}`)); // Отправляем ошибку через reject
      });
    } 
    else {
      reject(new Error('Geolocation не поддерживается')); // Отправляем ошибку через reject
    }
  });
}

async function requestGeolocation(latitude, longitude) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aa302d9baf187e648240b52a933d9fdc&lang=ru`;

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