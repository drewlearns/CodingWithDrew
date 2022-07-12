// Welcome Message
const greeting = 'Hello again';
let name = 'Drew';
let message = 'please check your order:';
let welcome = `<h1> ${greeting} ${name}, ${message} </h1>`;

// Create variables to hold details about the hats
let hat = [
    "https://p289.p2.n0.cdn.getcloudapp.com/items/KoujnEQK/c74755bf-018c-4d64-8f5f-52a15e65702b.jpg?v=c748267d47f97bef3986b994e400579d", 
    "https://p289.p2.n0.cdn.getcloudapp.com/items/mXuxbG7X/d5d37f62-7ace-45f4-9bf8-af4b9413a4e1.jpg?v=d1df8b2e5800eb8967b57c19e30296e8", 
    "https://p289.p2.n0.cdn.getcloudapp.com/items/llu0gXwr/cedb831f-8e0e-4815-8f63-6925dc8e0822.jpg?v=6d5e7df83c24712adbdc47a3892a7538",
    "https://p289.p2.n0.cdn.getcloudapp.com/items/9ZuozyNl/fdec4db8-00b4-4071-9aae-df301e3ae2f4.jpg?v=17b282f66c6454d4e6829276344aef2e" 
];

let hats = hat.length;
let subTotal = `${hats * 50}`;
let shipping = `8`;
let grandTotal = `$ ${subTotal + shipping * 1.075}`;

//select elements
const theGreeting = document.querySelector('#greeting');
const theHats = document.querySelector('#hats');
const theHatTotal = document.querySelector("#numHats");
const theSubtotal = document.querySelector("#subtotal");
const theShipping = document.querySelector('#shipping');
const theTotal = document.querySelector('#grandtotal');

// Replace content with new personalized contents
theGreeting.innerHTML = welcome ;
theHats.innerHTML = `
    <a href="${hat[0]}"><img src="${hat[0]}" alt="hat" width="300px"/></a>
    <a href="${hat[1]}"><img src="${hat[1]}" alt="hat" width="300px"/></a>
    <a href="${hat[2]}"><img src="${hat[2]}" alt="hat" width="300px"/></a>
    <a href="${hat[3]}"><img src="${hat[3]}" alt="hat" width="300px"/></a>
`
theHatTotal.textContent = hats;
theSubtotal.textContent = `\$${subTotal}`;
theShipping.textContent = `\$${shipping}`;
theTotal.textContent = grandTotal;