let input = document.querySelector("input");
let button = document.querySelector("button");

function check() {
  console.log(input.value);
}

button.addEventListener("click", check);
