import React from "react";
import { useState, useEffect } from "react";
import waldoConvention from '../../assets/images/Waldo_Convention.jpg';
import { createBoxAndSelection } from "./userSelectionBox";

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetch('/convention_character/index')
      .then((res) => res.json())
      .then((data) => {
        let characterArray = [];
        data.map((character) => {
          characterArray.push(
            Object.assign(character, {found: false})
          );
        })
        setCharacters(characterArray);
      })
      setDataFetched(true);
    }
  }, [dataFetched]) 

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