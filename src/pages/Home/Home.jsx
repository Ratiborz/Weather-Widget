import React, { useState } from "react";
import s from './Home.module.sass';
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";

export const Home = () => {
  const [showDays, setShowDays] = useState(false);

    return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days showDays={showDays} setShowDays={setShowDays} />
    </div>
    )
}