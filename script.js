"use strict";
//! Selectors
const container = document.querySelector(`.container`);
const btn = document.querySelector(`.btn-main`);
//! Event Listeners
btn.addEventListener(`click`, generateGrid);

//! Functions
function generateGrid() {
  container.style.display = `none`;
  let rows = +prompt(`Please type row number`, 16);
  let cols = +prompt(`Please type column number`, 16);
  if (rows > 64 || cols > 64) {
    alert(`You aren't allowed to pass 64!`);
    return;
  }
  makeRows(rows, cols);
}

function makeRows(rows, cols) {
  container.style.setProperty(`--grid-rows`, rows);
  container.style.setProperty(`--grid-cols`, cols);

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement(`div`);
    // cell.innerText = c + 1;
    container.appendChild(cell).className = `grid-item`;
    container.style.display = "grid";
    cell.addEventListener(`mouseenter`, changeColor);
    cell.addEventListener(`mouseleave`, trailColor);
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(e) {
  e.target.style.backgroundColor = `${getRandomColor()}`;
}

function trailColor(e) {
  e.target.style.backgroundColor = `rgba(0,0,0, .1)`;
}
