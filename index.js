let sum = "";
function buildSum(char) {
  sum += char;
  document.getElementById("output").innerHTML += char;
}

function calculate() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}

function reset() {
  sum = "";
  document.getElementById("output").innerHTML = "";
}

function red() {
  document.querySelector("#output").style.color = "red";
}
function green() {
  document.querySelector("#output").style.color = "green";
}
function blue() {
  document.querySelector("#output").style.color = "blue";
}
