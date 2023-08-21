import React from "react";
import waldoConvention from '../../assets/images/Waldo_Convention.jpg';
import { createBox, removeBox } from "./userSelectionBox";

export default function Main() {

  function handleUserClick(e) {
    const x = e.pageX;
    const y = e.pageY;
    removeBox();
    createBox({x: x, y: y});
  }

  document.addEventListener('click', (e) => {handleUserClick(e)});

  return(
    <div className='waldo-img-container'>
      <img src={waldoConvention} />
    </div>
  )
};