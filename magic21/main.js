// declare cards
const cards = ["J ♦️", "Q ♦️", " K ♦️", " A ♠", "A ❤️", "2 ❤️", "3 ❤️", "4 ❤️", "5 ❤️", "6 ❤️", "7 ❤️", "8 ♠", "9 ❤️", "10 ❤️", "J ♠", "Q ❤️", "K ❤️", "A ♠", "2 ♦️", "3 ♣", "4 ♦️"];
const cardList1 = document.querySelector('ul.group1');
const cardList2 = document.querySelector('ul.group2');
const cardList3 = document.querySelector('ul.group3');
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
//reloads page on click of startover button
button4.addEventListener("click", () => location.reload());
//desired outcomes:
group1Index = [0, 3, 6, 9, 12, 15, 18]
group2Index = [1, 4, 7, 10, 13, 16, 19]
group3Index = [2, 5, 8, 11, 14, 17, 20]
// shuffle cards
let shuffled = [];
function shuffler() {
    i = cards.length,
        j = 0;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        shuffled.push(cards[j]);
        cards.splice(j, 1);
    };
};
shuffler();
group1cards1 = []
group2cards1 = []
group3cards1 = []
function initialShow() {
    for (i = 0; i < 7; i++) {
        group1cards1.push(shuffled[group1Index[i]])
        cardList1.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
    }
    for (i = 7; i < 14; i++) {
        group1cards1.push(shuffled[group1Index[i]])
        cardList2.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
    }
    for (i = 14; i < 21; i++) {
        group1cards1.push(shuffled[group1Index[i]])
        cardList3.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
    }
    button1.addEventListener(
        "click",
        () => {
            console.log("clicked Red")
        }
    )
    button2.addEventListener(
        "click",
        () => {
            console.log("clicked blue")
        }
    )
    button3.addEventListener(
        "click",
        () => {
            console.log("clicked green")
        }
    )
}
initialShow();
