var winningMessage = ("You Won!");
var lostMessage = ("You Lost!");
var drawMessage = ("Its a Draw!");

var cell1;
var cell2;
var cell3;
var cell4;
var cell5;
var cell5;
var cell6;
var cell7;
var cell8;
var cell9;

/* Summary :
- T == occupied, E == empty 
- if true == user's turn 
*/

var turn = true;

var occupied = new Array(8);
var who = new Array(8);

/* Draw X or O */

document.getElementById("cell1").addEventListener("click", myFunction1);

function myFunction1() {
  if (occupied[0] != "T") {


    if (turn) {
      document.getElementById("cell1").style.backgroundImage = "url('x.png')";
      cell1 = "X";
    }
    else {
      document.getElementById("cell1").style.backgroundImage = "url('o.png')";
      cell1 = "O";
    }
    if (turn) {

      who = "X";
    }
    else {
      who = "O";

    }
    occupied[0] = "T";
    turn = !turn;
  }

}

document.getElementById("cell2").addEventListener("click", myFunction2);

function myFunction2() {
  if (occupied[1] != "T") {

  if (turn) {
    document.getElementById("cell2").style.backgroundImage = "url('x.png')";
    cell2 = "X";
  }
  else {
    document.getElementById("cell2").style.backgroundImage = "url('o.png')";
    cell2 = "O";
  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[1] = "T";

  turn = !turn;
  }
}

document.getElementById("cell3").addEventListener("click", myFunction3);

function myFunction3() {
  if (occupied[2] != "T") {

  if (turn) {
    document.getElementById("cell3").style.backgroundImage = "url('x.png')";
    cell3 = "X";

  }
  else {
    document.getElementById("cell3").style.backgroundImage = "url('o.png')";
    cell3 = "O";
  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[2] = "T";
  turn = !turn;
  }
}

document.getElementById("cell4").addEventListener("click", myFunction4);

function myFunction4() {
  if (occupied[3] != "T") {

  if (turn) {
    document.getElementById("cell4").style.backgroundImage = "url('x.png')";
    cell4 = "X";
  }
  else {
    document.getElementById("cell4").style.backgroundImage = "url('o.png')";
    cell4 = "O";
  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[3] = "T";
  turn = !turn;
  }
}

document.getElementById("cell5").addEventListener("click", myFunction5);

function myFunction5() {
  if (occupied[4] != "T") {

  if (turn) {
    document.getElementById("cell5").style.backgroundImage = "url('x.png')";
    cell5 = "X";
  }
  else {
    document.getElementById("cell5").style.backgroundImage = "url('o.png')";
    cell5 = "O";
  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[4] = "T";
  turn = !turn;
  }
}

document.getElementById("cell6").addEventListener("click", myFunction6);

function myFunction6() {
  if (occupied[5] != "T") {

  if (turn) {
    document.getElementById("cell6").style.backgroundImage = "url('x.png')";
    cell6 = "X";
  }
  else {
    document.getElementById("cell6").style.backgroundImage = "url('o.png')";
    cell6 = "O";
  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[5] = "T";
  turn = !turn;
  }
}

document.getElementById("cell7").addEventListener("click", myFunction7);

function myFunction7() {
  if (occupied[6] != "T") {

  if (turn) {
    document.getElementById("cell7").style.backgroundImage = "url('x.png')";
    cell7 = "X";
    
  }
  else {
    document.getElementById("cell7").style.backgroundImage = "url('o.png')";
    cell7 = "O";

  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[6] = "T";
  turn = !turn;
  }
}

document.getElementById("cell8").addEventListener("click", myFunction8);

function myFunction8() {
  if (occupied[7] != "T") {

  if (turn) {
    document.getElementById("cell8").style.backgroundImage = "url('x.png')";
    cell8 = "X";
  }
  else {
    document.getElementById("cell8").style.backgroundImage = "url('o.png')";
    cell8 = "O";
  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[7] = "T";
  turn = !turn;
}
}

document.getElementById("cell9").addEventListener("click", myFunction9);

function myFunction9() {
  if (occupied[8] != "T") {

  if (turn) {
    document.getElementById("cell9").style.backgroundImage = "url('x.png')";
    cell9 = "X";
  }
  else {
    document.getElementById("cell9").style.backgroundImage = "url('o.png')";
    cell9 = "O";
  }
  if (turn) {

    who = "X";
  }
  else {
    who = "O";

  }
  occupied[8] = "T";
  turn = !turn;
  }
}

function checkResult() {
if(cell1 & cell4 & cell7 == "X"){
  console.log("patata");
}

}