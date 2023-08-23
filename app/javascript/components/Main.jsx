import React from "react";
import { useState, useEffect } from "react";
import waldoConvention from '../../assets/images/Waldo_Convention.jpg';
import { createBoxAndSelection } from "./userSelectionBox";

export default function Main() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('/convention_character/index')
    .then((res) => res.json())
    .then((data) => setCharacters(data));
  }, [])

  const handleUserClickCreate = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    createBoxAndSelection({x: x, y: y}, characters);
  }

  return(
    <div className='waldo-img-container'>
      <img src={waldoConvention} onClick={handleUserClickCreate}/>
    </div>
  )
};