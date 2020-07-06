'use strict'

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const startButton = document.querySelector('button[data-action="start"] ');
const stopButton = document.querySelector('button[data-action="stop"] ');
const body = document.querySelector('body');
let timerId = null;
let isActive = true;


startButton.addEventListener('click', (event) => { 
  if (isActive) {timerId = setInterval(() => {
    
    console.log(isActive);
    colorChanger(); 
}, 1000);}
isActive = false;}
);


stopButton.addEventListener('click', (event) => {
  clearTimeout(timerId);
  isActive = true;
  console.log(isActive);
}
);
const colorChanger = () => {
    body.setAttribute("style", `background: ${colors[randomIntegerFromInterval(0,5)]};`);


  };


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

