
export async function requestByCity(city) {
  if (city.replace(/\s/g, "").length > 0) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa302d9baf187e648240b52a933d9fdc&lang=ru`;

        const response = await fetch(url);
        if (!response.ok) {
          alert('Неправильный запрос')
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
  }
  else {
    alert('Введите название города')
  }
}