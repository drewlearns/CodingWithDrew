
// group1cards1.push(shuffled[group1Index[i]])
// cardList2.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
// cardList3.innerHTML += `<li class="card" id="a${i}"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
const cards = ["J ♦️", "Q ♦️", " K ♦️", " A ♠", "A ❤️", "2 ❤️", "3 ❤️", "4 ❤️", "5 ❤️", "6 ❤️", "7 ❤️", "8 ♠", "9 ❤️", "10 ❤️", "J ♠", "Q ❤️", "K ❤️", "A ♠", "2 ♦️", "3 ♣", "4 ♦️"];
// let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
num = 0 // TODO: DELETEME and all references
num = cards[num]
console.log(num)
// select a number
let newdeck = [];
let newdeck2 = [];
let newdeck3 = [];
let newdeck4 = [];
let group1 = [];
let group2 = [];
let group3 = [];
let group11 = [];
let group12 = [];
let group13 = [];
let group21 = [];
let group22 = [];
let group23 = [];
let group31 = [];
let group32 = [];
let group33 = [];
const shuffledList = document.querySelector(".shuffled")
//shuffle
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
console.log(shuffled)

// map out where everything should go on a shuffle
console.log(shuffled)
g1 = [0, 3, 6, 9, 12, 15, 18]
g2 = [1, 4, 7, 10, 13, 16, 19]
g3 = [2, 5, 8, 11, 14, 17, 20]

// make 3 groups
for (i = 0; i < 7; i++) {
    group1.push(shuffled[g1[i]])
    group2.push(shuffled[g2[i]])
    group3.push(shuffled[g3[i]])
}
for (i = 0; i < shuffled.length; i++) {
    shuffledList.innerHTML += `<li class="card display"><span class="top" >${shuffled[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${shuffled[i]}</span></li>`
}
button1.addEventListener(
    "click",
    () => {
        cardlist1.setAttribute("class", ".display group1")
        cardlist2.setAttribute("class", ".display group2")
        cardlist3.setAttribute("class", ".display group3")
        shuffledList.setAttribute("class", "noDisplay")

    }
)

const cardList1 = document.querySelector("ul.group1")
for (i = 0; i < group1.length; i++) {
    cardList1.innerHTML += `<li class="card"><span class="top">${group1[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group1[i]}</span></li>`
}
const cardList2 = document.querySelector("ul.group2")
for (i = 0; i < group1.length; i++) {
    cardList2.innerHTML += `<li class="card"><span class="top">${group2[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group2[i]}</span></li>`
}
const cardList3 = document.querySelector("ul.group3")
for (i = 0; i < group1.length; i++) {
    cardList3.innerHTML += `<li class="card"><span class="top">${group3[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group3[i]}</span></li>`
}
cardList1.addEventListener(
    "click",
    () => {
        console.log("Your card was in card list 1:", cardList1)
        newdeck.push(...group2);
        newdeck.push(...group1);
        newdeck.push(...group3);
        console.log("group1 newdeck", newdeck)
        cardlist1.innerHTML = ""
        cardlist2.innerHTML = ""
        cardlist3.innerHTML = ""
        // deal kinda
        for (i = 0; i < 7; i++) {
            group11.push(newdeck[g1[i]]);
            group12.push(newdeck[g2[i]]);
            group13.push(newdeck[g3[i]]);
        }
        for (i = 0; i < group11.length; i++) {
            cardList1.innerHTML += `<li class="card"><span class="top">${group11[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group11[i]}</span></li>`
        }
        for (i = 0; i < group12.length; i++) {
            cardList2.innerHTML += `<li class="card"><span class="top">${group12[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group12[i]}</span></li>`
        }
        for (i = 0; i < group13.length; i++) {
            cardList3.innerHTML += `<li class="card"><span class="top">${group13[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group13[i]}</span></li>`
        }
    }
)
cardList2.addEventListener(
    "click",
    () => {
        console.log("Your card was in card list 2:", cardList2)
        newdeck.push(...group1);
        newdeck.push(...group2);
        newdeck.push(...group3);
        console.log("group2 newdeck", newdeck)
        cardlist1.innerHTML = ""
        cardlist2.innerHTML = ""
        cardlist3.innerHTML = ""
        // deal kinda
        for (i = 0; i < 7; i++) {
            group11.push(newdeck[g1[i]]);
            group12.push(newdeck[g2[i]]);
            group13.push(newdeck[g3[i]]);
        }
        for (i = 0; i < group11.length; i++) {
            cardList1.innerHTML += `<li class="card"><span class="top">${group11[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group11[i]}</span></li>`
        }
        for (i = 0; i < group12.length; i++) {
            cardList2.innerHTML += `<li class="card"><span class="top">${group12[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group12[i]}</span></li>`
        }
        for (i = 0; i < group13.length; i++) {
            cardList3.innerHTML += `<li class="card"><span class="top">${group13[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group13[i]}</span></li>`
        }
    }
)
cardList3.addEventListener(
    "click",
    () => {
        newdeck.push(...group1);
        newdeck.push(...group3);
        newdeck.push(...group2);
        console.log("group3 newdeck", newdeck)
        cardlist1.innerHTML = ""
        cardlist2.innerHTML = ""
        cardlist3.innerHTML = ""
        // deal kinda
        for (i = 0; i < 7; i++) {
            group11.push(newdeck[g1[i]]);
            group12.push(newdeck[g2[i]]);
            group13.push(newdeck[g3[i]]);
        }
        for (i = 0; i < group11.length; i++) {
            cardList1.innerHTML += `<li class="card"><span class="top">${group11[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group11[i]}</span></li>`
        }
        for (i = 0; i < group12.length; i++) {
            cardList2.innerHTML += `<li class="card"><span class="top">${group12[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group12[i]}</span></li>`
        }
        for (i = 0; i < group13.length; i++) {
            cardList3.innerHTML += `<li class="card"><span class="top">${group13[i]}</span><span class="cardType">🧜‍♀️</span><span class="mirror">🧜‍♀️</span><span class="bottom">${group13[i]}</span></li>`
        }
    }
)



// if your card is in the X group, shuffle so the X group is in the middle
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

// deal kinda
for (i = 0; i < 7; i++) {
    group21.push(newdeck2[g1[i]]);
    group22.push(newdeck2[g2[i]]);
    group23.push(newdeck2[g3[i]]);
}
console.log(group21)

// if your card is in the X group, shuffle so the X group is in the middle
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
// Your Card displayed
console.log("Your num", newdeck3[10])