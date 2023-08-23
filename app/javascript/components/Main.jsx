import React from "react";
import { useState, useEffect } from "react";
import waldoConvention from '../../assets/images/Waldo_Convention.jpg';
import UserSelectionBox from './UserSelectionBox';
import GameTimer from "./GameTimer";

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [userSelectionCoords, setUserSelectionCoords] = useState({x: 0, y: 0});

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
    setUserSelectionCoords({x: x, y: y});
    console.log(characters);
  }

  const verifyCharacter = (boxCoords, chosenCharacter) => {
    let correctXValue = false;
    let correctYValue = false;
    if (
      chosenCharacter.location[0] <= boxCoords.right 
      &&
      chosenCharacter.location[0] >= boxCoords.left
    ) {
      correctXValue = true
    }
  
    if (
      chosenCharacter.location[1] <= boxCoords.bottom 
      &&
      chosenCharacter.location[1] >= boxCoords.top
    ) {
      correctYValue = true
    }
  
    if ( correctXValue == true && correctYValue == true){
      console.log('Correct!');
      let characterArray = [];
        characters.map((character) => {
          if (character.name === chosenCharacter.name) {
            characterArray.push(
              Object.assign(character, {found: true})
            );
          } else {
            characterArray.push(
              Object.assign(character)
            );
          }
        })
        setCharacters(characterArray);
    } else {
      console.log('Wrong!');
    }
  }

  if (characters !== []) {
  return(
    <div className='game-container'>
      <div className='waldo-img-container'>
        <img src={waldoConvention} onClick={handleUserClickCreate}/>
        <UserSelectionBox userSelectionCoords={userSelectionCoords} characters={characters} verifyCharacter={verifyCharacter}/>
      </div>
      <GameTimer />
    </div>
  )
  } else {
    return(
      <h1>Loading...</h1>
    )
  }
};