let input = document.querySelector("input");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

let rand = Math.floor(Math.random() * 101); //generating number between 0 - 101

console.log(rand);

function check() {
  let inputVal = +input.value; //getting value as a number
  if (inputVal < rand) {
    console.log("Your guess is lower than the number");
  } else if (inputVal > rand) {
    console.log("Your value is higher than the number");
  } else if (inputVal === rand) {
    console.log("Hurray! You guessed the correct number");
  }
}

function Reset() {
  input.value = "";
  rand = Math.floor(Math.random() * 101); //generating a new number;
  console.log(rand);
}

submit.addEventListener("click", check);
reset.addEventListener("click", Reset);
