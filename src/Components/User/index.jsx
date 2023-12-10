import React, { useState } from "react";
import style from "./style.module.css";

const [rankState, setRank] = useState(rank);

const handlerIncrease = () => setRank(rankState + 1);

const handlerDecrease = () => setRank(rankState - 1);

    const User = ({name, secondName, age, gender, rank}) => {
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
            <div /*className={style.Title}*/ style={".title"}>
              Рейтинг {rank}
            </div>
            <span>{rank}</span>
            <div>
              <button onClick={handlerIncrease}>+</button>
              <button onClick={handlerDecrease}>-</button>
            </div>
          </div>
        )
    }
       
    export default User