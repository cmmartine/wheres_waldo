import React from "react";

export default function GroupSelect(props) {
  const {setCharacterGroup} = props;

  return(
    <div className='group-selection-div'>
      Select a group of characters:
      <button className="input-button" onClick={() => setCharacterGroup(1)}>Group 1</button>
      <button className="input-button" onClick={() => setCharacterGroup(2)}>Group 2</button>
      <button className="input-button" onClick={() => setCharacterGroup(3)}>Group 3</button>
      <p style={{fontSize: '24px'}}>
        (Have google ready to search a character if you don't know them, 
        time starts once you make a selection)
      </p>
    </div>
  );
}