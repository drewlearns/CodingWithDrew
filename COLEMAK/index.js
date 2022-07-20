const keys = [
  "Tab",
  "q",
  "w",
  "f",
  "p",
  "g",
  "j",
  "l",
  "u",
  "y",
  "CapsLock",
  "a",
  "r",
  "s",
  "t",
  "d",
  "h",
  "n",
  "e",
  "i",
  "o",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "k",
  "m",
  "Control",
  "Alt",
  "Meta",
]
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(0, keys.length - 1);
console.log(keys[randomNumber])
let randomKey = document.querySelector(`#${keys[randomNumber]}`);
randomKey.classList.add("selected");

//keydown handler
keyPressed = window.addEventListener('keydown', (event) => {
  if (randomKey.id == event.key) {
    location.reload();   
  }
});