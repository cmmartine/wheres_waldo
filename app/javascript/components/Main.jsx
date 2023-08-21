import React from "react";
import waldoConvention from '../../assets/images/Waldo_Convention.jpg';
import { createBox } from "./userSelectionBox";

export default function Main() {

  function handleUserClick(e) {
    const x = e.pageX;
    const y = e.pageY;
    createBox({x: x, y: y});
  }

  document.addEventListener('click', (e) => {handleUserClick(e)});

  return(
    <div className='waldo-img-container'>
      <img src={waldoConvention} />
    </div>
  )
};