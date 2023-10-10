import React from "react";
import { useState, useEffect } from "react";
import waldoConvention from '../../assets/images/Waldo_Convention.jpg';
import GroupSelect from "./GroupSelection";
import UserSelectionBox from './UserSelectionBox';
import GameTimer from "./GameTimer";
import ScoreBoard from "./ScoreBoard";
import InputUserScore from "./InputUserScore";

export default function Main() {
  const [characterGroup, setCharacterGroup] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [userSelectionCoords, setUserSelectionCoords] = useState({x: 0, y: 0});
  const [userSelectionBoxVis, setUserSelectionBoxVis] = useState(false);
  const [scoreList, setScoreList] = useState([]);
  const [time, setTime] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    if (characterGroup != 0) {
      fetch('/convention_character/index')
      .then((res) => res.json())
      .then((data) => {
        let characterArray = [];
        data.map((character) => {
          if (character.group === characterGroup) {
            characterArray.push(
              Object.assign(character, {found: false})
            );
          }
        })
        setCharacters(characterArray);
      })
    }
    fetch('/scores/index')
      .then((res) => res.json())
      .then((data) => setScoreList(data));
  }, [characterGroup]);
  
  const handleUserClickCreate = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setUserSelectionCoords({x: x, y: y});
    setUserSelectionBoxVis(!userSelectionBoxVis);
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
    setGameFinished(isGameFinished());
  }

  const changeTime = (newTime) => {
    setTime(newTime);
  }

  function isGameFinished() {
    let done = true;
    characters.forEach((character) => {
      if (character.found == false) {
        done = false;
      }
    });
    return done
  }

  const resetGame = () => {
    setGameFinished(false);
    setTime(0);
    setCharacterGroup(0);
  }

  if (characterGroup === 0) {
    return(
      <div className='game-container'>
        <GroupSelect setCharacterGroup={setCharacterGroup}/>
        <ScoreBoard scoreList={scoreList} />
      </div>
    )
  } else if (characters != [] && gameFinished == false) {
    return(
      <div className='game-container'>
        <div className='waldo-img-container'>
          <img src={waldoConvention} onClick={handleUserClickCreate}/>
          <UserSelectionBox userSelectionCoords={userSelectionCoords} characters={characters} verifyCharacter={verifyCharacter} boxVisibilityStatus={userSelectionBoxVis}/>
        </div>
        <div>
          <GameTimer time={time} changeTime={changeTime}/>
          <ScoreBoard scoreList={scoreList} />
        </div>
      </div>
    )
  } else if (gameFinished == true) {
    return(
      <div className='game-container'>
      <div className='waldo-img-container'>
        <img src={waldoConvention} onClick={handleUserClickCreate}/>
        <InputUserScore time={time} resetGame={resetGame} characterGroup={characterGroup}/>
      </div>
      <div>
        <div className='game-timer'>
          {time}
        </div>
        <ScoreBoard scoreList={scoreList} />
      </div>
    </div>
    )
  } else {
    return(
      <h1>Loading...</h1>
    )
  }
};