import React from "react";

export default function GameTimer(props) {
  const {time, changeTime} = props;

  (setTimeout(() => {
    changeTime(time + 1);
  }, 1000));

  return(
    <div className='game-timer'>
      {time}
    </div>
  )
}