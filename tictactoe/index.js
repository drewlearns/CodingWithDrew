const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const xButton = document.querySelector('#x')
const oButton = document.querySelector('#o')
const cancel = document.querySelector('#cancel')
const confirm = document.querySelector('#confirm')
const tictactoe = document.querySelector('.tictactoe')
// set user to null
let user;
let clicked;
let count = 0;
//convert word id to number
var small = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};
var big = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};
// onclick reply with clicked id
function reply_click(clicked_id) {
    clicky = clicked_id;
    box = (small[clicky]);
}
// if clicked on x or o set id confirm to have class confirm to hid buttons
xButton.addEventListener("click", () => {
    confirm.classList.add("confirm");
    user = "x";
    alert("You are user X")
    let myClicks = [];
})
oButton.addEventListener("click", () => {
    confirm.classList.add("confirm");
    user = "0";
    alert("You are user O")
    let myClicks = [];
})
//if try to click on board and no user set, prompt
tictactoe.addEventListener("click", () => {
    if (user == undefined) {
        alert("You must select x or o")
    }
    if (user == "x" && count % 2 == 0) {
        document.querySelector(`#${big[box]}`).textContent = "X";
        count++;
        user = "o";
    } else {
        if (count == 0) {
            user = x;
            document.querySelector(`#${big[box]}`).textContent = "X";
            count++;
            user = "o";
        }
        document.querySelector(`#${big[box]}`).textContent = "O";
        count++;
        user = "x";
    }
})

function clearTheBoard() {
    count = 0;
    user = undefined;
    confirm.classList.remove("confirm");
    one.textContent = ""
    two.textContent = ""
    three.textContent = ""
    four.textContent = ""
    five.textContent = ""
    six.textContent = ""
    seven.textContent = ""
    eight.textContent = ""
    nine.textContent = ""
}
tictactoe.addEventListener("click", () => {
    if (one.textContent == "X" && two.textContent == "X" && three.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (one.textContent == "X" && five.textContent == "X" && nine.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (one.textContent == "X" && four.textContent == "X" && seven.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (two.textContent == "X" && five.textContent == "X" && eight.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (four.textContent == "X" && five.textContent == "X" && six.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (three.textContent == "X" && six.textContent == "X" && nine.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (seven.textContent == "X" && eight.textContent == "X" && nine.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (seven.textContent == "X" && five.textContent == "X" && three.textContent == "X") {
        alert("x wins");
        clearTheBoard();
    }
    if (one.textContent == "O" && two.textContent == "O" && three.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (one.textContent == "O" && five.textContent == "O" && nine.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (one.textContent == "O" && four.textContent == "O" && seven.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (two.textContent == "O" && five.textContent == "O" && eight.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (four.textContent == "O" && five.textContent == "O" && siO.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (three.textContent == "O" && six.textContent == "O" && nine.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (seven.textContent == "O" && eight.textContent == "O" && nine.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (seven.textContent == "O" && five.textContent == "O" && three.textContent == "O") {
        alert("O wins");
        clearTheBoard();
    }
    if (count == 10) {
        alert("Draw");
        clearTheBoard();
    }
})




// check textcontent against winning array
