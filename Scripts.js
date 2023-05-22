
let workingCal = document.querySelector('.textField');
let displayTotal = document.querySelector('.textField2');

function operatorTest (character){
  //This checks the characters recieved from the 'placeCharacter' function and if it is an operator it returns true
  if(character === '+'){
    return true
  }
  else if(character === '-'){
    return true
  }
  else if(character === '*'){
    return true
  }
  else if(character === '/'){
    return true
  }
}

function placeCharacter(character){
 //this function collects a value from the button when it is clicked

  //the if statement checks is there is a value in the text container that displays the end calculation
  if (displayTotal.innerHTML != ''){
    //if the new character that is added is an operator this will move the value of the end calculation to the text box that calculates
    if (operatorTest(character)){
      workingCal.innerHTML = displayTotal.innerHTML;
      displayTotal.innerHTML = '';
    }
    else{
      displayTotal.innerHTML = '';
    }
  
  }
  workingCal.innerHTML += character;
}

function calculate (){
  let result = eval(workingCal.innerHTML) || '';
  workingCal.innerHTML = '';
  displayTotal.innerHTML = result;
}

function clearButton (){
  workingCal.innerHTML = '';
  displayTotal.innerHTML = '';
}

function del (){
    console.log(`WC: ${workingCal.innerHTML}`);
    console.log(`DT: ${displayTotal.innerHTML}`);
    workingCal.innerHTML = workingCal.innerHTML.slice(0, -1);
    displayTotal.innerHTML = displayTotal.innerHTML.slice(0, -1);
}