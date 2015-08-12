var consent = true;
while (consent == true) {
  var num1 = parseFloat(prompt('Gimme your first number!'));
  var op = prompt('Do you want (a)ddition, (s)ubtraction, (m)ultiplication or (d)ivision?');
  op = op.toLowerCase();
  var num2 = parseFloat(prompt('Gimme your second number!'));
  var answer = "";
  if(op === "a") {
    answer = num1 + num2;
  } else if(op === "s") {
    answer = num1 - num2;
  } else if(op === "m") {
    answer = num1 * num2;
  } else if(op === "d") {
    answer = num1 / num2;
  }
  alert('Your answer: ' + answer);
  consent = confirm('Start again?')
}