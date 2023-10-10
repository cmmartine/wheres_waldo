import React from "react";

export default function UserSelectionBox(props) {
  const {userSelectionCoords, characters, verifyCharacter, boxVisibilityStatus} = props;
  const halfBoxSize = {x: 55, y: 85};
  let leftX = userSelectionCoords.x - halfBoxSize.x;
  let rightX = userSelectionCoords.x + halfBoxSize.x; 
  let topY = userSelectionCoords.y - halfBoxSize.y;
  let bottomY = userSelectionCoords.y + halfBoxSize.y;
  const boxCoords = {left: leftX, right: rightX, top: topY, bottom: bottomY};

  const boxStyle = {
    position: 'absolute',
    left: leftX + 'px',
    right: rightX + 'px',
    top: topY + 'px',
    bottom: bottomY + 'px',
    width: '110px',
    height: '166px',
    border: '5px solid greenyellow',
  }

  const dropDownStyle = {
    position: 'absolute',
    left: rightX + 10 +'px',
    top: topY + 'px',
    border: '2px solid black',
    background: 'white',
    width: '200px',
    height: 'auto',
  }

  const characterButtonStyle = {
    width: '100%',
    height: 'auto',
    background: 'white',
    border: '1px solid black',
    fontSize: '20px',
    padding: '8px',
  }
  const characterButtonStyleFound = {
    width: '100%',
    height: 'auto',
    background: 'white',
    border: '1px solid black',
    fontSize: '20px',
    padding: '8px',
    textDecoration: 'line-through',
  }

  if (boxVisibilityStatus) {
    return(
      <div>
        <div style={boxStyle} />
        <div style={dropDownStyle}>
          {characters.map((character) => {
            if (character.found) { 
              return <button style={characterButtonStyleFound} disabled={true} onClick={() => verifyCharacter(boxCoords, character)}>
                {character.name}
              </button>
            } else {
              return <button style={characterButtonStyle} disabled={false} onClick={() => verifyCharacter(boxCoords, character)}>
                {character.name}
              </button>
            }
          })}
        </div>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}