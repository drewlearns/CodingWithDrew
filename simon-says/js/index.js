// lets
let computerOrder = []; // use order to set the "order" of lights and keep track of it
let playerOrder = []; // use playerOrder to set the "order" that the player selects
let flash; // will set the integer (number of flashes that have appeared in the game)
let turn; // keeps track of what turn we are on
let good; // boolean true or false if the playerOrder matches computerOrder
let compTurn; // boolean to determine if it's the computer's turn or the player's turn
let intervalId; // will  explain later
let strict = false; // keep track if strict boolean is false
let noise = true; // if we are playing noise, it'll make more sense as you read the code
let power = false; // keeps track of power selection
let win; // determines whether the player won the game or not

// consts
const turnCounter = document.querySelector("#turn");
const topleft = document.querySelector("#topleft");
const topright = document.querySelector("#topright");
const bottomright = document.querySelector("#bottomright");
const bottomleft = document.querySelector("#bottomleft");
const strictButton = document.querySelector("#strict");
const powerButton = document.querySelector("#start");

/* Add Event Listeners to Consts */
// strict button
strictButton.addEventListener("click", (event) => {
  console.log("clicked strict");
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
  console.log("strict", strict);
});
// power button
powerButton.addEventListener("click", (event) => {
  console.log("clicked power");
    power = true;
    turnCounter.innerHTML = "-ON-";
    clearColor(); // TODO: Need to define clearColor()
    clearInterval(intervalId); // TODO: Need to define clearInterval
    let audio = document.querySelector("#audio5");
    noise = true;
    audio.play();
    noise = false;
  }
  }
  console.log("power", power);
  if (power || win) {
    play(); // TODO: define play()
  }
});

/* GAME LOGIC */

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log("order:", order);
  compTurn = true;
  let intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  power = false;
  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    power = true;
  }
  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) {
        one();
      }
      if (order[flash] == 2) {
        two();
      }
      if (order[flash] == 3) {
        three();
      }
      if (order[flash] == 4) {
        four();
      }
      flash++;
    }, 800);
  }
}

function one() {
  let audio = document.querySelector("#audio1");
  if (noise) {
    audio.play();
  }
  noise = true;
  topleft.style.backgroundColor = "lightgreen";
}
function two() {
  let audio = document.querySelector("#audio2");

  if (noise) {
    audio.play();
  }
  noise = true;
  topright.style.backgroundColor = "tomato";
}
function three() {
  let audio = document.querySelector("#audio3");

  if (noise) {
    audio.play();
  }
  noise = true;
  bottomright.style.backgroundColor = "lightskyblue";
}
function four() {
  let audio = document.querySelector("#audio4");

  if (noise) {
    audio.play();
  }
  noise = true;
  bottomleft.style.backgroundColor = "yellow";
}

function clearColor() {
  bottomleft.style.backgroundColor = "goldenrod";
  bottomright.style.backgroundColor = "darkblue";
  topright.style.backgroundColor = "darkred";
  topleft.style.backgroundColor = "darkgreen";
}

function flashColor() {
  topleft.style.backgroundColor = "lightgreen";
  topright.style.backgroundColor = "tomato";
  bottomleft.style.backgroundColor = "yellow";
  bottomright.style.backgroundColor = "lightskyblue";
}

// green
topleft.addEventListener("click", (event) => {
  console.log("clicked green");
  if (power) {
    playerOrder.push(1);
    check();
    one();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});
//red
topright.addEventListener("click", (event) => {
  console.log("clicked red");
  if (power) {
    playerOrder.push(1);
    check();
    two();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});
//blue
bottomright.addEventListener("click", (event) => {
  console.log("clicked blue");
  if (power) {
    playerOrder.push(1);
    check();
    three();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});
//yellow
bottomleft.addEventListener("click", (event) => {
  console.log("clicked yellow");
  if (power) {
    playerOrder.push(1);
    check();
    four();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

function check() {
  if (playerOrder[playerOrder.length - 1] == order[playerOrder.length - 1]) {
    good = false;
  }
  if (playerOrder.length == 20 && good) {
    winGame();
  }
  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "OPE!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();
      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn(), 800);
      }
    }, 800);
    noise = false;
  }
  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn(), 800);
  }
}
function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  power = false;
  win = true;
  intervalId = setInterval(gameTurn(), 800);
  

}
