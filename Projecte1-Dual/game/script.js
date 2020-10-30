var won = false;
var lost = false;
var rounds = 0;

/* Summary :
- T == occupied, E == empty 
- if true == user's turn 
*/

var turn = true;

var occupied = [[0, "E"], [1, "E"], [2, "E"], [3, "E"], [4, "E"], [5, "E"], [6, "E"], [7, "E"], [8, "E"]];
var who = new Array(8);



/* Draw X or O */

document.getElementById("cell0").addEventListener("click", myFunction1);

function myFunction1() {
  if (occupied[0][1] == "E") {


    if (turn) {
      document.getElementById("cell0").style.backgroundImage = "url('../imgs/x.png')";
      occupied[0] = [0, "X"];
    }
    rounds ++;
    turn = !turn;
    setTimeout(function () { checkResult(); }, 100);
  }
  bot()

}

document.getElementById("cell1").addEventListener("click", myFunction2);

function myFunction2() {
  if (occupied[1][1] == "E") {

    if (turn) {
      document.getElementById("cell1").style.backgroundImage = "url('../imgs/x.png')";
      occupied[1] = [1, "X"];
    }

    rounds ++;
    turn = !turn;
    setTimeout(function () { checkResult(); }, 100);

  }
  bot()


}

document.getElementById("cell2").addEventListener("click", myFunction3);

function myFunction3() {
  if (occupied[2][1] == "E") {

    if (turn) {
      document.getElementById("cell2").style.backgroundImage = "url('../imgs/x.png')";
      occupied[2] = [2, "X"];

    }

    rounds ++;
    turn = !turn;
    setTimeout(function () { checkResult(); }, 100);
  }
  bot()

}

document.getElementById("cell3").addEventListener("click", myFunction4);

function myFunction4() {
  if (occupied[3][1] == "E") {

    if (turn) {
      document.getElementById("cell3").style.backgroundImage = "url('../imgs/x.png')";
      occupied[3] = [3, "X"];
    }

    rounds ++;
    turn = !turn;
    setTimeout(function () { checkResult(); }, 100);
  }

  bot()
}

document.getElementById("cell4").addEventListener("click", myFunction5);

function myFunction5() {
  if (occupied[4][1] == "E") {

    if (turn) {
      document.getElementById("cell4").style.backgroundImage = "url('../imgs/x.png')";
      occupied[4] = [4, "X"];
    }
    turn = !turn;
    rounds ++;
    setTimeout(function () { checkResult(); }, 100);
  }

  bot()
}

document.getElementById("cell5").addEventListener("click", myFunction6);

function myFunction6() {
  if (occupied[5][1] == "E") {

    if (turn) {
      document.getElementById("cell5").style.backgroundImage = "url('../imgs/x.png')";
      occupied[5] = [5, "X"];
    }
    turn = !turn;
    rounds ++;
    setTimeout(function () { checkResult(); }, 100);
  }
  bot()
}

document.getElementById("cell6").addEventListener("click", myFunction7);

function myFunction7() {
  if (occupied[6][1] == "E") {

    if (turn) {
      document.getElementById("cell6").style.backgroundImage = "url('../imgs/x.png')";
      occupied[6] = [6, "X"];

    }

    turn = !turn;
    rounds ++;
    setTimeout(function () { checkResult(); }, 100);
  }
  bot()
}

document.getElementById("cell7").addEventListener("click", myFunction8);

function myFunction8() {
  if (occupied[7][1] == "E") {

    if (turn) {
      document.getElementById("cell7").style.backgroundImage = "url('../imgs/x.png')";
      occupied[7] = [7, "X"];
    }
    turn = !turn;
    rounds ++;
    setTimeout(function () { checkResult(); }, 100);
  }
  bot()
}

document.getElementById("cell8").addEventListener("click", myFunction9);

function myFunction9() {
  if (occupied[8][1] == "E") {


    if (turn) {
      document.getElementById("cell8").style.backgroundImage = "url('../imgs/x.png')";
      occupied[8] = [8, "X"];
    }
    turn = !turn;
    rounds ++;
    setTimeout(function () { checkResult(); }, 100);
  }
  bot()

}

 function checkResult() {
   if (
    occupied[0][1] == "X" && occupied[1][1] == "X" && occupied[2][1] == "X" ||
    occupied[3][1] == "X" && occupied[4][1] == "X" && occupied[5][1] == "X" ||
    occupied[6][1] == "X" && occupied[7][1] == "X" && occupied[8][1] == "X" ||
    occupied[0][1] == "X" && occupied[3][1] == "X" && occupied[6][1] == "X" ||
    occupied[1][1] == "X" && occupied[4][1] == "X" && occupied[7][1] == "X" ||
    occupied[2][1] == "X" && occupied[5][1] == "X" && occupied[8][1] == "X" ||
    occupied[0][1] == "X" && occupied[4][1] == "X" && occupied[8][1] == "X" ||
    occupied[2][1] == "X" && occupied[4][1] == "X" && occupied[6][1] == "X") {
    window.alert("Has guanyat")
    won = true;
    window.location.href = "../ranking/ranking.html";
  }

  else if (
    occupied[0][1] == "O" && occupied[1][1] == "O" && occupied[2][1] == "O" ||
    occupied[3][1] == "O" && occupied[4][1] == "O" && occupied[5][1] == "O" ||
    occupied[6][1] == "O" && occupied[7][1] == "O" && occupied[8][1] == "O" ||
    occupied[0][1] == "O" && occupied[3][1] == "O" && occupied[6][1] == "O" ||
    occupied[1][1] == "O" && occupied[4][1] == "O" && occupied[7][1] == "O" ||
    occupied[2][1] == "O" && occupied[5][1] == "O" && occupied[8][1] == "O" ||
    occupied[0][1] == "O" && occupied[4][1] == "O" && occupied[8][1] == "O" ||
    occupied[2][1] == "O" && occupied[4][1] == "O" && occupied[6][1] == "O") {
    window.alert("Has perdut")
    lost = true
    window.location.href = "../ranking/ranking.html";
  } 

   else if (rounds == 9 & won == false & lost == false){
    window.alert("Has empetat")
    window.location.href = "../ranking/ranking.html";
  }
}

function checkBoard() {

  var num = Math.floor(Math.random() * 9);
  console.log(occupied[num][0])

  while (occupied[num][1] != "E" & rounds < 9) {
    num = Math.floor(Math.random() * 9);
  }

  if (occupied[num][1] == "E") {
    console.log("patata")
    document.getElementById("cell" + num).style.backgroundImage = "url('../imgs/o.png')";
    occupied[num] = [num, "O"];
    turn = !turn;
    rounds ++;
    setTimeout(function () { checkResult(); }, 100);
  }

}

function bot() {
  console.log(turn)
  if (!turn) {
    setTimeout(function () { checkBoard(); }, 100);
  }
}
