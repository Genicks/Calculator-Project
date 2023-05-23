
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
  
  let display = workingCal.innerHTML;
  let newWorkingCal = checkForArtOperators(display);

  workingCal.innerHTML = newWorkingCal.slice(0, -1);
  displayTotal.innerHTML = displayTotal.innerHTML.slice(0, -1);
}

function checkForArtOperators(dis) {
  if (dis.includes(' + ')){
    dis = dis.replace(' + ', '+');
    return dis
  }
  else if (dis.includes(' - ')){
    dis = dis.replace(' - ', '-');
    return dis
  }
  else if (dis.includes(' / ')){
    dis = dis.replace(' / ', '/');
    return dis
  }
  else if (dis.includes(' * ')){
    dis = dis.replace(' * ', '*');
    return dis
  }
  else{
    dis = dis;
    return dis
  }
}
