var btn = document.querySelector(".btn1");

btn.addEventListener("click", changeHandler);

function changeHandler() {
  console.log("click");
}

var number = 9;
console.log((number = number + 9));

function sumTwoNumber(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
console.log("sum =", sumTwoNumber(45, 23));
