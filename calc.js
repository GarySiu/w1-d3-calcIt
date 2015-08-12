var consent = true;
while (consent == true) {
  var num1 = parseFloat(prompt('Gimme your base number!'));
  var op = prompt('Do you want (a)ddition, (s)ubtraction, (m)ultiplication, (d)ivision, s(q)uare root or po(w)er?');
  op = op.toLowerCase();
  if(op === "q") {
    answer = Math.sqrt(num1);
  } else {
    if(op === "w") {
      var num2 = parseFloat(prompt('Gimme your exponent!'));
      answer = Math.pow(num1, num2);
    }else {
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
    }
  }
  alert('Your answer: ' + answer);
  consent = confirm('Start again?')
}