import React from "react";
import { useState } from "react";

export default function InputUserScore(props) {
  const {time, resetGame} = props;
  const [inputName, setInputName] = useState('');
  const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

  const updateName = (name) => {
    setInputName(name);
  }

  const postTimeForScore = () => {
    fetch('/scores/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRF-Token': csrf,
      },
      body: 
        JSON.stringify({score: {
          score: time,
          name: inputName,
        }})
      }
    )
    resetGame();
    setInputName('');
  }

  return(
    <div className='input-user-score-container'>
      <form className='name-input-form'>
        <label>Enter your name:</label>
        <input className='name-input' type='text' defaultValue={inputName} onChange={(e) => {
          e.preventDefault();
          updateName(e.target.value);
          }}/>
        <input type='submit' className='name-input-button' value='Submit' onClick={(e) => {
          e.preventDefault();
          postTimeForScore();
        }}/>
      </form>
    </div>
  )
}