let input = document.querySelector("input");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let p = document.querySelector("p");

let rand = Math.floor(Math.random() * 101); //generating number between 0 - 101

let regex = /^[0-9]/gm;

function check() {
  let inputVal = input.value; //getting value as a number

  if (regex.test(inputVal)) {
    inputVal = +inputVal;
  } else {
    p.innerHTML = "Please input a valid number!";
    p.style.color = "red";
    return;
  }

  if (inputVal === rand) {
    p.innerHTML = "Hurray! You guessed it right";
  } else if (rand - inputVal < 10 && rand - inputVal > -10) {
    p.innerHTML = "You are too close";
  } else if (inputVal < rand) {
    p.innerHTML = "Your guess is lower than the number";
  } else if (inputVal > rand) {
    p.innerHTML = "Your guess is higher than the number";
  }
}

function Reset() {
  input.value = "";
  rand = Math.floor(Math.random() * 101); //generating a new number;
  p.innerHTML = "";
}

submit.addEventListener("click", check);
reset.addEventListener("click", Reset);
