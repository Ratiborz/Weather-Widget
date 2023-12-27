export async function requestByCity(city) {
  if (city.replace(/\s/g, "").length > 0) {
    try {
        const url = `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&lang=ru`;

        const response = await fetch(url);
        if (!response.ok) {
          alert('Неправильный запрос')
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
  }
  else {
    alert('Введите название города')
  }
}