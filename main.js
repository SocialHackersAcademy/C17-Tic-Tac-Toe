/*let cells = document.querySelectorAll("[data-cell]");

// this will give each element an event listener
cells.forEach((cell, i) => {
  cell.addEventListener("click", handleclick, { once: true });
});
let choice = false;
var counter = 0;
function handleclick(e) {
  // change the value in that cell
  counter++;
  let cell = e.target;
  if (choice === true) {
    cell.style.background = "red";
  } else {
    cell.style.background = "blue";
  }
  check("red");
  check("blue");
  choice = !choice;
}

function check(pick) {
  if (
    cells[0].style.background === pick &&
    cells[1].style.background === pick &&
    cells[2].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[3].style.background === pick &&
    cells[4].style.background === pick &&
    cells[5].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[6].style.background === pick &&
    cells[7].style.background === pick &&
    cells[8].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[0].style.background === pick &&
    cells[3].style.background === pick &&
    cells[6].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[1].style.background === pick &&
    cells[4].style.background === pick &&
    cells[7].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[2].style.background === pick &&
    cells[5].style.background === pick &&
    cells[8].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[0].style.background === pick &&
    cells[4].style.background === pick &&
    cells[8].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (
    cells[2].style.background === pick &&
    cells[4].style.background === pick &&
    cells[6].style.background === pick
  ) {
    alert(pick + " is the winner ");
  } else if (counter >= 9) {
    alert("it's a draw");
  }
}

function clean() {
  window.location.reload();
}

// Try the most easy
// DRY : don't repeat yorself
// check for back practice
// emprove your app
*/