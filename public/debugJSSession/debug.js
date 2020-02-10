function onClick(event) {
    event.preventDefault()
    
    if (inputsAreEmpty()) {
      label.textContent = 'Error: one or both inputs are empty.';
      return;
    }
    updateLabel();
  }
  function inputsAreEmpty() {
    if (getNumber1() === '' || getNumber2() === '') {
      return true;
    } else {
      return false;
    }
  }
  function updateLabel() {
    var num1 = getNumber1();
    var num2 = getNumber2();
    var sum = num1 + num2;
    label.textContent = num1 + ' + ' + num2 + ' = ' + sum;
  }
  function getNumber1() {
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }
  
  var inputs = document.querySelectorAll('input');
  var label = document.querySelector('p');
  var button = document.getElementById('debug-btn');

  button.addEventListener('click', onClick);
  