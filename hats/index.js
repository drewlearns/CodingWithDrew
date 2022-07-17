// Select elements
const theGreeting = document.querySelector('#greeting');
const theHats = document.querySelector('#hats');
const theNumHats = document.querySelector('#numHats')
const theSubtotal = document.querySelector('#subtotal');
const theShipping = document.querySelector('#shipping');
const theTotal = document.querySelector('#grandtotal');

// create some variables that declare our content

//greeting
const greeting = "Hello again";
let name = "Drew";
let message = "Please check your order";
let welcome = `<h1>${greeting} ${name}, ${message} </h1>`;
// let welcome = '<h1>' + greeting + " " + name + ", " + message + ":" + '</h1>`
// console.log(welcome)
theGreeting.innerHTML = welcome;

// The Hats
let hats = [
    "./media/1.jpg",
    "./media/2.jpg",
    "./media/3.jpg",
    "./media/4.jpg",
];

theHats.innerHTML = `
    <img src="${hats[0]}" width="300px" alt="1.jpg"/>
    <img src="${hats[1]}" width="300px" alt="2.jpg"/>
    <img src="${hats[2]}" width="300px" alt="3.jpg"/>
    <img src="${hats[3]}" width="300px" alt="4.jpg"/>
`;
// Num Hats
theNumHats.textContent = hats.length;

// Subtotal
subtotal = hats.length * 35;
theSubtotal.textContent = `$${subtotal}`;

// shipping

let shipping = 9.99;
theShipping.textContent = `\$${shipping}`;

// The grand Total
let grandtotal = shipping + subtotal;
theTotal.textContent = `\$${grandtotal}`;