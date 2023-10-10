import React from "react";

export default function GroupSelect(props) {
  const {setCharacterGroup} = props;

  return(
    <div className='group-selection-div'>
      <p className='game-instructions'>
        Instructions:
      </p>
      <p className='game-instructions'>
        Click anywhere to open the character select menu, 
        click anywhere outside of this menu and selection box 
        to get rid of it until you click again.
      </p>
      <p className='game-instructions'>
        To select a character get them into the selection box 
        and click on their name.
      </p>
      <p className='game-instructions'>
        Zoom in and out by holding left ctrl and scrolling your mouse wheel.
      </p>
      <p className='game-instructions'>
        (Have google ready to search a character if you don't know them, 
        time starts once you select a group)
      </p>

      Select a group of characters:
      <button className="input-button" onClick={() => setCharacterGroup(1)}>Group 1</button>
      <button className="input-button" onClick={() => setCharacterGroup(2)}>Group 2</button>
      <button className="input-button" onClick={() => setCharacterGroup(3)}>Group 3</button>
    </div>
  );
}