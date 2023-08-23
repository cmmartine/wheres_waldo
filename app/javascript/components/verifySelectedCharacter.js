export default function verifyCharacter(boxCoords, character) {
  let correctXValue = false;
  let correctYValue = false;
  if (
    character.location[0] <= boxCoords.right 
    &&
    character.location[0] >= boxCoords.left
  ) {
    correctXValue = true
  }

  if (
    character.location[1] <= boxCoords.bottom 
    &&
    character.location[1] >= boxCoords.top
  ) {
    correctYValue = true
  }

  if ( correctXValue == true && correctYValue == true){
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  }
}