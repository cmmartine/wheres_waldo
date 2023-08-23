import React from "react";
import { useState } from "react";

export default function GameTimer() {
  const [time, setTime] = useState(0);

  (setTimeout(() => {
    setTime(time + 1);
  }, 1000));

  return(
    <div className='game-timer'>
      {time}
    </div>
  )
}