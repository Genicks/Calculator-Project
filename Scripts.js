let workingCal2 = document.getElementById('textbox');
let displayTotal2 = '';

let artOperaters = [' + ', ' - ', ' * ', ' / ']

function operatorTest (character){
  if(artOperaters.includes(character)){
    return true
  }
}

function placeCharacter(character){
  if (displayTotal2 != ''){

    if (operatorTest(character)){
      workingCal2.value = displayTotal2;
      displayTotal2 = '';
    }
    else{
      displayTotal2 = '';
    }
  
  }
  workingCal2.value += character;
}

function calculate (){
  let result2 = eval(workingCal2.value) || '0';
  console.log(result2);

  workingCal2.value = '';

  displayTotal2 = result2;
  workingCal2.value = result2;
}

function clearButton (){
  workingCal2.value = '';
}

function del (){  
  if (workingCal2.value.charAt(workingCal2.value.length - 1).includes(' ')){
    workingCal2.value = workingCal2.value.slice(0, -3);
  }

  else{
    workingCal2.value = workingCal2.value.slice(0, -1);
    displayTotal2.value = displayTotal.value.slice(0, -1);
  }
}
