
export async function requestByCity(city) {
  try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa302d9baf187e648240b52a933d9fdc&lang=ru`;
      const response = await fetch(url);

      const data = await response.json();
      return console.log(data);
  } catch (error) {
      console.error('Error fetching data: ', error);
  }
}
