let input = document.querySelector("input");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let p = document.querySelector("p");

let rand = Math.floor(Math.random() * 101); //generating number between 0 - 101

console.log(rand);

function check() {
  let inputVal = +input.value; //getting value as a number
  if (inputVal < rand) {
    p.innerHTML = "Your guess is lower than the number";
  } else if (inputVal > rand) {
    p.innerHTML = "Your value is higher than the number";
  } else if (inputVal === rand) {
    p.innerHTML = "Hurray! You guessed the correct number";
  }
}

function Reset() {
  input.value = "";
  rand = Math.floor(Math.random() * 101); //generating a new number;
  p.innerHTML = "";
}

submit.addEventListener("click", check);
reset.addEventListener("click", Reset);
