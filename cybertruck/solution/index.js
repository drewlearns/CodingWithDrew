// lets
let x = 0;
let y = 0;
let speed = 50;
let flipped = true;

// consts
const gas = document.querySelector(".gas");
const buttonRight = document.querySelector(".buttonRight");
const buttonLeft = document.querySelector(".buttonLeft");
const buttonUp = document.querySelector(".buttonUp");
const buttonDown = document.querySelector(".buttonDown");
const restart = document.querySelector(".restart");
const cybertruck = document.querySelector(".cybertruck");

function up() {
  y = y - 1;
  rotate = 90;
  flipped = true;
}
function down() {
  y = y + 1;
  rotate = -90;
}
function right() {
  x = x + 1;
  rotate = 0;
  flipped = true;
}
function left() {
  x = x - 1;
  rotate = 0;
  flipped = false;
}
function setNewAttribute() {
  cybertruck.setAttribute(
    "style",
    `
                --rotateX: ${flipped ? "180deg" : "0"};
                --rotate: ${rotate}deg;
                --x: ${x * speed}px;
                --y: ${y * speed}px;
            `
  );
}

// Key Handler
function handleKeyDown() {
  if (!event.key.includes("Arrow")) {
    alert("That wasn't a valid key!");
  }
  switch (event.key) {
    case "ArrowUp":
      up();
      break;
    case "ArrowDown":
      down();
      break;
    case "ArrowRight":
      right();
      break;
    case "ArrowLeft":
      left();
      break;
  }
  setNewAttribute();
}

// Button Click Event Handlers

//restart button
restart.addEventListener("click", function () {
  alert("Recharging your CyberTruck!");
  document.location.reload(true); // refreshes the page
});

//left
buttonLeft.addEventListener("click", function () {
  left();
  setNewAttribute();
});
buttonUp.addEventListener("click", function () {
  up();
  setNewAttribute();
});
buttonDown.addEventListener("click", function () {
  down();
  setNewAttribute();
});
buttonRight.addEventListener("click", function () {
  right();
  setNewAttribute();
});

// gas
gas.addEventListener("click", () => (speed += 50));

window.addEventListener("keydown", handleKeyDown);
