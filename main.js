let cells = document.querySelectorAll("[data-cell]");
gameboard=[]
player=[]
let index
borderState=new Array(9)

//--------------------- check winner
function check(pick) {
  if (
    borderState[0] === pick &&
    borderState[1] === borderState[0] &&
    borderState[2] === borderState[0]
  ) {
    alert(pick + " is the winner ");
    clean()
  }else if (
    borderState[3] === pick &&
    borderState[4] === borderState[3] &&
    borderState[5] === borderState[3]
  ) {
    alert(pick + " is the winner ");
    clean()
  } else if (
    borderState[6] === pick &&
    borderState[7] === borderState[6] &&
    cells[8].style.backgroundImage === cells[6].style.backgroundImage
  ) {
    alert(pick + " is the winner ");
    clean()
  } else if (
    borderState[0] === pick &&
    borderState[3] === borderState[0] &&
    borderState[6] === borderState[0]
  ) {
    alert(pick + " is the winner ");
    clean()
  } else if (
    borderState[1] === pick &&
    borderState[4] === borderState[1] &&
    borderState[7] === borderState[1]
  ) {
    alert(pick + " is the winner ");
    clean()
  } else if (
    borderState[2] === pick &&
    borderState[5] === borderState[2] &&
    borderState[8] === borderState[2]
  ) {
    alert(pick + " is the winner ");
    clean()
  } else if (
    borderState[0] === pick &&
    borderState[4] === borderState[0] &&
    cells[8].style.backgroundImage === borderState[0]
  ) {
    alert(pixk + " is the winner ");
    clean()
  } else if (
    borderState[2] === pick &&
    borderState[4] === borderState[2] &&
    borderState[6] === borderState[2]
  ) {
    alert(pick + " is the winner ");
    clean()
  } else if (counter >= 9) {
    alert(pick+"it's a draw");
    clean()
  }
}
// this will give each element an event listener
cells.forEach((cell, i) => {
  cell.addEventListener("click", handleclick, { once: true });
});
let choice = false;
// let choice='player'
var counter = 0;
function handleclick(e) {
  // change the value in that cell
  counter++;
  let cell = e.target;

  if (choice === true) {
    gameboard.push(Array.prototype.indexOf.call(cell.parentNode.children, cell))
    borderState[Array.prototype.indexOf.call(cell.parentNode.children, cell)]='gameboared'
    cell.style.backgroundImage = "url('./img/x.png')";
    cell.style.backgroundSize = 'cover'
  } else {
    player.push(Array.prototype.indexOf.call(cell.parentNode.children, cell))
    index=Array.prototype.indexOf.call(cell.parentNode.children, cell)
    borderState[index]='player'
    cell.style.backgroundImage = "url('./img/o.png')";
    cell.style.backgroundSize = 'cover'
  }
  check(borderState[Array.prototype.indexOf.call(cell.parentNode.children, cell)]);
  console.log('check gameboard by bordersate: ',borderState[Array.prototype.indexOf.call(cell.parentNode.children, cell)])
  choice = !choice;
}
// console.log(cells[0].getAttributeNames())


function clean() {
  window.location.reload();
}

// Try the most easy
// DRY : don't repeat yorself
// check for back practice
// emprove your app

