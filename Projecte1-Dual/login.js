// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAZr5qV_aJvAN8btezdzovDEMOZpwLtimU",
  authDomain: "projectedual-37559.firebaseapp.com",
  databaseURL: "https://projectedual-37559.firebaseio.com",
  projectId: "projectedual-37559",
  storageBucket: "projectedual-37559.appspot.com",
  messagingSenderId: "480361617110",
  appId: "1:480361617110:web:e022ec284b73d0e598db77",
  measurementId: "G-GLRGP5019L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


window.onload = addBubles();



/* ============= BG MUSIC ============ */
var img_play = document.getElementById("play");
var img_stop = document.getElementById("stop");
var audio = document.getElementById("audio");
var btn_ranking = document.getElementById("ranking_btn");
window.addEventListener("load", function () {
  img_play.addEventListener("click", function () {
    img_play.style.display = "none";
    img_stop.style.display = "inline";
    audio.play();
  });

  img_stop.addEventListener("click", function () {
    img_stop.style.display = "none";
    img_play.style.display = "inline";
    audio.pause();
  });

  /* ============== RANKING BTN ============= */
  
  btn_ranking.addEventListener("click", function () {
    location.replace("ranking/ranking.php");
  });

});




function login() {

  var userMail = document.getElementById("userMail").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userMail, password).catch(function (error) {
    alert(errorMessage);
  });
  document.getElementById("userMail").nodeValue = "";
  document.getElementById("password").nodeValue = "";

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      location.replace("game/joc.php");
    } else {
      alert("Email or password incorrect");
    }
  });
}

function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function (result) {
    console.log(result);
    console.log("Success Google Account");
  }).catch(function (err) {
    console.log(err);
    console.log("Failed Google Account");
  });

}
/* ============================ Bubbles ====================== */

function addBubles(){
  for(var i = 0; i <= 20 ;i++){
    var div = document.createElement("div");
    div.classList.add("bubble");
    document.getElementById("bubbles").appendChild(div);
  }
}
  