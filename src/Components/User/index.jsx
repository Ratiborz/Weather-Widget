import React, { useState } from "react";
import style from "./style.module.css";

const User = ({name, secondName, age, gender, rank}) => {

  const [rankState, setRank] = useState(rank);
  const handlerIncrease = (e) => {
    console.log(e)
    setRank(rankState + 1)
  }

async function apiRequests() {
  try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=aa302d9baf187e648240b52a933d9fdc`;
      const response = await fetch(url);

      /*if (!response.ok) {
          throw new Error('Network response was not ok');
      }*/

      const data = await response.json();
      return console.log(data);
  } catch (error) {
      console.error('Error fetching data: ', error);
  }
} 

    return (
      <div className={style.UserCard}>
        <div className={style.Title}>
          {`Пользователь: ${name} ${secondName}`}
        </div>
        <div>
          <div className={style.Title}>
            Информация:
          </div>
          <div>
            {`Возраст: ${age}`}
          </div>
          <div>
            {`Пол: ${gender}`}
          </div>
        </div>
        <div className={style.Title}>
          Рейтинг {rank}
        </div>
        <span>{rank}</span>
        <div>
          <button onClick={(e)  => handlerIncrease(e)}>+</button>
          <button onClick={apiRequests}>-</button>
        </div>
      </div>
    )
}
       
export default User