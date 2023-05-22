
let text = document.querySelector('.textField');
let text2 = document.querySelector('.textField2');

function operatorTest (character){
  //This checks the characters recieved from the 'placeCharacter' function and if it is an operator it returns true
  if(character === ' + '){
    return true
  }
  else if(character === ' - '){
    return true
  }
  else if(character === ' * '){
    return true
  }
  else if(character === ' / '){
    return true
  }
  else if(character === ' ( '){
    return true
  }
  else if(character === ' ) '){
    return true
  }
}

function placeCharacter(character){
//this function collects a value from the button when it is clicked

  //the if statement checks is there is a value in the text container that displays the end calculation
  if (text2.innerHTML != ''){
    //if the new character that is added is an operator this will move the value of the end calculation to the text box that calculates
    if (operatorTest(character)){
      text.innerHTML = text2.innerHTML;
      text2.innerHTML = '';
    }
    else{
      text2.innerHTML = '';
    }
  
  }
  text.innerHTML += character;
}

function calculate (){
  let result = eval(text.innerHTML) || '';
  text.innerHTML = '';
  text2.innerHTML = result;
}

function clearButton (){
  text.innerHTML = '';
  text2.innerHTML = '';
}