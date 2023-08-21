const halfBoxSize = {x: 55, y: 85};

export function createBox(userSelectionCoords) {
  const boxCoordinates = calcBoxCoordinates(userSelectionCoords);
  removeBox();
  drawBox(boxCoordinates);
}

function removeBox() {
  const box = document.getElementById('user-selection-box');
  if(box) {
    box.remove();
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
  console.log(boxCoords)
  const root = document.getElementById('root');
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

