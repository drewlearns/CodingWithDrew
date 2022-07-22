// // declare cards
// const cards = ["J ♦️", "Q ♦️", " K ♦️", " A ♠", "A ❤️", "2 ❤️", "3 ❤️", "4 ❤️", "5 ❤️", "6 ❤️", "7 ❤️", "8 ♠", "9 ❤️", "10 ❤️", "J ♠", "Q ❤️", "K ❤️", "A ♠", "2 ♦️", "3 ♣", "4 ♦️"];
// const cardList1 = document.querySelector('ul.group1');
// const cardList2 = document.querySelector('ul.group2');
// const cardList3 = document.querySelector('ul.group3');
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// const button4 = document.querySelector("#button4");
// //reloads page on click of startover button
// button4.addEventListener("click", () => location.reload());
// //desired outcomes:
// group1Index = [0, 3, 6, 9, 12, 15, 18]
// group2Index = [1, 4, 7, 10, 13, 16, 19]
// group3Index = [2, 5, 8, 11, 14, 17, 20]
// // shuffle cards
// let shuffled = [];
// function shuffler() {
//     i = cards.length,
//         j = 0;
//     while (i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         shuffled.push(cards[j]);
//         cards.splice(j, 1);
//     };
// };
// shuffler();
// group1cards1 = []
// group2cards1 = []
// group3cards1 = []
// function initialShow() {
//     for (i = 0; i < 7; i++) {
//         group1cards1.push(shuffled[group1Index[i]])
//         cardList1.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
//     }
//     for (i = 7; i < 14; i++) {
//         group1cards1.push(shuffled[group1Index[i]])
//         cardList2.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
//     }
//     for (i = 14; i < 21; i++) {
//         group1cards1.push(shuffled[group1Index[i]])
//         cardList3.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
//     }
//     button1.addEventListener(
//         "click",
//         () => {
//             console.log("clicked Red")
//         }
//     )
//     button2.addEventListener(
//         "click",
//         () => {
//             console.log("clicked blue")
//         }
//     )
//     button3.addEventListener(
//         "click",
//         () => {
//             console.log("clicked green")
//         }
//     )
// }
// initialShow();




new21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
newdeck = [];
newdeck2 = [];
newdeck3 = [];
newdeck4 = [];
group1 = [];
group2 = [];
group3 = [];
group11 = [];
group12 = [];
group13 = [];
group21 = [];
group22 = [];
group23 = [];
group31 = [];
group32 = [];
group33 = [];

//shuffle
let shuffled = [];
function shuffler() {
    i = new21.length,
        j = 0;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        shuffled.push(new21[j]);
        new21.splice(j, 1);
    };
};
shuffler();
console.log(shuffled)
g1 = [0, 3, 6, 9, 12, 15, 18]
g2 = [1, 4, 7, 10, 13, 16, 19]
g3 = [2, 5, 8, 11, 14, 17, 20]
// select a number
num = 18
console.log(num)
for (i = 0; i < 7; i++) {
    group1.push(shuffled[g1[i]])
    group2.push(shuffled[g2[i]])
    group3.push(shuffled[g3[i]])
}

if (group1.includes(num)) {
    newdeck.push(...group2);
    newdeck.push(...group1);
    newdeck.push(...group3);
    console.log("group1 newdeck", newdeck)
} else if (group2.includes(num)) {
    newdeck.push(...group1);
    newdeck.push(...group2);
    newdeck.push(...group3);
    console.log("group2 newdeck", newdeck)
} else {
    newdeck.push(...group1);
    newdeck.push(...group3);
    newdeck.push(...group2);
    console.log("group3 newdeck", newdeck)
}

// reshuffle kinda
for (i = 0; i < 7; i++) {
    group11.push(newdeck[g1[i]]);
    group12.push(newdeck[g2[i]]);
    group13.push(newdeck[g3[i]]);
}

// which pile?
if (group11.includes(num)) {
    newdeck2.push(...group12);
    newdeck2.push(...group11);
    newdeck2.push(...group13);
    console.log("group11 newdeck2", newdeck2)
} else if (group12.includes(num)) {
    newdeck2.push(...group13);
    newdeck2.push(...group12);
    newdeck2.push(...group11);
    console.log("group12 newdeck2", newdeck2)
} else {
    newdeck2.push(...group12);
    newdeck2.push(...group13);
    newdeck2.push(...group11);
    console.log("group13 newdeck2", newdeck2)
}

// reshuffle kinda
for (i = 0; i < 7; i++) {
    group21.push(newdeck2[g1[i]]);
    group22.push(newdeck2[g2[i]]);
    group23.push(newdeck2[g3[i]]);
}
console.log(group21)
// which pile?
if (group21.includes(num)) {
    newdeck3.push(...group22);
    newdeck3.push(...group21);
    newdeck3.push(...group23);
    console.log("group21 newdeck3", newdeck3)
} else if (group22.includes(num)) {
    newdeck3.push(...group23);
    newdeck3.push(...group22);
    newdeck3.push(...group21);
    console.log("group22 newdeck3", newdeck3)
} else {
    newdeck3.push(...group22);
    newdeck3.push(...group23);
    newdeck3.push(...group21);
    console.log("group23 newdeck3", newdeck3)
}

console.log("Your num", newdeck3[10])