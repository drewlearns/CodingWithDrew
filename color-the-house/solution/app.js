// https://www.thecolorapi.com/id?format=svg&scheme=ff121d
// https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6&format=svg
const roof = document.querySelector(".roof");
const roofWindow = document.querySelector(".window");
const house = document.querySelector(".house");
const door = document.querySelector(".door");
const doorKnob = document.querySelector(".door-knob");
let randomHEX1 = Math.floor(Math.random() * 16777215).toString(16);
let randomHEX2 = Math.floor(Math.random() * 16777215).toString(16);
let randomHEX3 = Math.floor(Math.random() * 16777215).toString(16);
let randomHEX4 = Math.floor(Math.random() * 16777215).toString(16);
let randomHEX5 = Math.floor(Math.random() * 16777215).toString(16);
let randomHEX6 = Math.floor(Math.random() * 16777215).toString(16);
house.setAttribute(
  "style",
  `  
        background-color: #${randomHEX1};
        `
);
roofWindow.setAttribute(
  "style",
  `  
    background-color: #${randomHEX2};
  `
);
roof.setAttribute(
  "style",
  `  
    border-bottom: 300px solid #${randomHEX3};
  `
);
house.setAttribute(
  "style",
  ` 
    border: 5px solid #${randomHEX4};
  `
);
door.setAttribute(
  "style",
  `
    background-color: #${randomHEX5};
    border: 5px solid #${randomHEX4};
  `
);
doorKnob.setAttribute(
  "style",
  `
    background-color:#${randomHEX6}
  `
);
