import React from "react";
import { useState, useEffect } from "react";
import waldoConvention from '../../assets/images/Waldo_Convention.jpg';
import { createBox } from "./userSelectionBox";

export default function Main() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('/convention_character/index')
    .then((res) => res.json())
    .then((data) => setCharacters(data));
  }, [])

  function handleUserClick(e) {
    const x = e.pageX;
    const y = e.pageY;
    console.log(characters)
    createBox({x: x, y: y});
  }

  document.addEventListener('click', (e) => {handleUserClick(e)});

  return(
    <div className='waldo-img-container'>
      <img src={waldoConvention} />
    </div>
  )
};