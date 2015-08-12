var consent = true;
while (consent == true) {
  var num1 = parseFloat(prompt('Gimme your first number!'));
  var num2 = parseFloat(prompt('Gimme your second number!'));
  alert('Your total: ' + (num1 + num2))
  consent = confirm('Start again?')
}