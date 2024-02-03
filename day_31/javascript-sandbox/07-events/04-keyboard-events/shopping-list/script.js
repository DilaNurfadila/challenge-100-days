const itemInput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("Keypress");
};

const onKeyUp = (e) => {
  console.log("Keyup");
};

const onKeyDown = (e) => {
  // console.log("Keydown");
  // key
  // console.log(e.key);
  // document.querySelector('h1').innerText = e.key
  // if(e.key === 'Enter') {
  //   alert('Your pressed enter')
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  // https://www.toptal.com/developers/keycode/table
  if(e.keyCode === 13) {
    alert('You pressed enter 2')
  }

  // code
  // console.log(e.code);
  if(e.code === 'Digit1') {
    console.log('Your pressed 1');
  }

  if(e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Shift: '+e.shiftKey);
  console.log('Control: '+e.ctrlKey);
  console.log('Alt: '+e.altKey);

  if(e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
