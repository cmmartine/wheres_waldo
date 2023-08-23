import verifyCharacter from "./verifySelectedCharacter";

const halfBoxSize = {x: 55, y: 85};
const root = document.getElementById('root');

export function createBoxAndSelection(userSelectionCoords, characters) {
  const boxCoordinates = calcBoxCoordinates(userSelectionCoords);
  removeBox();
  drawBox(boxCoordinates);
  createDropDown(boxCoordinates, characters);
}

function removeBox() {
  const box = document.getElementById('user-selection-box');
  const dropDown = document.getElementById('user-selection-dropdown');
  if(box && dropDown) {
    box.remove();
    dropDown.remove();
  } else {
    return
  }
}

function calcBoxCoordinates(userSelectionCoords) {
  const leftX = userSelectionCoords.x - halfBoxSize.x;
  const rightX = userSelectionCoords.x + halfBoxSize.x;
  const topY = userSelectionCoords.y - halfBoxSize.y;
  const bottomY = userSelectionCoords.y + halfBoxSize.y;
  const boxCoordinates = {left: leftX, right: rightX, top: topY, bottom: bottomY};

  return boxCoordinates;
}

function drawBox(boxCoords) {
  const box = document.createElement('div');
  box.id = 'user-selection-box';
  box.style.position = 'absolute';
  box.style.left = boxCoords.left + 'px';
  box.style.right = boxCoords.right + 'px';
  box.style.top = boxCoords.top + 'px';
  box.style.bottom = boxCoords.bottom + 'px';
  box.style.width = '110px';
  box.style.height = '166px';
  box.style.border = '5px solid greenyellow';
  root.appendChild(box);
}

function createDropDown(boxCoords, characters) {
  let charId = 1;
  const dropDown = document.createElement('div');
  dropDown.id = 'user-selection-dropdown';
  dropDown.style.position = 'absolute';
  dropDown.style.left = boxCoords.right + 10 +'px'; // align drop down to attach to top right of box
  dropDown.style.top = boxCoords.top + 'px';
  dropDown.style.border = '2px solid black';
  dropDown.style.background = 'white';
  dropDown.style.width = '200px';
  dropDown.style.height = 'auto';

  characters.forEach((character) => {
    const charBtn = document.createElement('button');
    charBtn.innerText = character.name;
    charBtn.style.width = '100%';
    charBtn.style.height = '35px';
    charBtn.style.background = 'white';
    charBtn.style.border = '1px solid black';
    charBtn.classList.add('character-button');
    charBtn.id = charId;
    charId += 1;

    dropDown.appendChild(charBtn);
    charBtn.addEventListener('click', () => verifyCharacter(boxCoords, character));
  })
  root.appendChild(dropDown);
}