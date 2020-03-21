//Write your javascript logic here

/*
function onClickShowOutput() {
  let expression = '5+2*10'
  const output = getExpressionOutput(expression)
  console.log(output)
  document.getElementById('output').innerHTML = output
}*/
let total;
let input2 = "";
let count = 0;
let flag;

function myfunction(x) {
  if (count == 0) {
    allclear('');
  }
  input2 = document.getElementById("display").value += x;
  count = count + 1
}

function allclear(y) {
  document.getElementById("display").value = y;

  input2 = "";
  count = 0
}

function getExpressionOutput() {
  try {
    const total = eval(input2);
    document.getElementById("display").value = total;
  }
  catch (e) {
    document.getElementById("display").value = "Invalid expreesion"
    console.warn('Invalid expression', input2)

  }
}
