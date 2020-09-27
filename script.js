let input = document.querySelector("input");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let p = document.querySelector("p");

let rand = Math.floor(Math.random() * 101); //generating number between 0 - 101

function check() {
  let inputVal = input.value; //getting value as a number
  if (inputVal === "") {
    //checking if the input field is not filled
    p.innerHTML = "Please input a number";
    return;
  }
  if (+inputVal === rand) {
    p.innerHTML = "Hurray! You guessed it right";
  } else if (rand - inputVal < 10 && rand - inputVal > -10) {
    p.innerHTML = "You are too close";
  } else if (+inputVal < rand) {
    p.innerHTML = "Your guess is lower than the number";
  } else if (+inputVal > rand) {
    p.innerHTML = "Your guess is higher than the number";
  } else {
    p.innerHTML = "Please input a valid number";
  }
}

function Reset() {
  input.value = "";
  rand = Math.floor(Math.random() * 101); //generating a new number;
  p.innerHTML = "";
}

submit.addEventListener("click", check);
reset.addEventListener("click", Reset);
