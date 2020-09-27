let input = document.querySelector("input");
let button = document.querySelector("button");

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

button.addEventListener("click", check);
