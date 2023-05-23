
let workingCal = document.querySelector('.textField');
let displayTotal = document.querySelector('.textField2');
let artOperaters = [' + ', ' - ', ' * ', ' / ']

function operatorTest (character){
  if(artOperaters.includes(character)){
    return true
  }
}

function placeCharacter(character){

  if (displayTotal.innerHTML != ''){

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
  let result = eval(workingCal.innerHTML) || '0';
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

  if (workingCal.innerHTML.charAt(workingCal.innerHTML.length - 1).includes(' ')){
    workingCal.innerHTML = workingCal.innerHTML.slice(0, -3);
  }
  else{
    workingCal.innerHTML = workingCal.innerHTML.slice(0, -1);
    displayTotal.innerHTML = displayTotal.innerHTML.slice(0, -1);
  }
}
