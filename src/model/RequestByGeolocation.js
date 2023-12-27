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
        if (error.code === error.PERMISSION_DENIED) {
          // Выводим алерт с сообщением об отказе разрешения получения геопозиции
          alert('Вы отказали в предоставлении геопозиции. Пожалуйста, укажите ваш город вручную.');
        } else {
          reject(new Error(`Ошибка получения геопозиции: ${error.message}`)); // Отправляем другие ошибки через reject
        }
      });
    } 
    else {
      reject(new Error('Geolocation не поддерживается')); // Отправляем ошибку через reject
    }
  });
}

async function requestGeolocation(latitude, longitude) {
    try {
        const url = `${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&lang=ru`;

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