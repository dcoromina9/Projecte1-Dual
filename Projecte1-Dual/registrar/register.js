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
const db = firebase.database();


var img_play = document.getElementById("play");
var img_stop = document.getElementById("stop");
var audio = document.getElementById("audio");


window.addEventListener("load",function(){  
    img_play.addEventListener("click",function(){
            img_play.style.display = "none";
            img_stop.style.display = "inline";
            audio.play();
    });

    img_stop.addEventListener("click",function(){
        img_stop.style.display = "none";
        img_play.style.display = "inline";
        audio.pause();
});
});

window.onload = addBubles();




function register() {
    var currentUser = auth.currentUser;
    if (currentUser != null) {
        auth.signOut();
    }

    var email = document.getElementById("userMail").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("username").value;

    const newUser = auth.createUserWithEmailAndPassword(email, password).then(e => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            alert(errorMessage);
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                //Afagir el camp punts a la db juntament amb el userID.
                currentUser = auth.currentUser;
                db.ref("/users/" + currentUser.uid).set({
                    userID: currentUser.uid,
                    userName: name,
                    points: 0
                });
                location.replace("../index.php");

            } else {
                alert("Email or password incorrect");
            }
        });

    });
    newUser.catch(e => alert(e.message));

    document.getElementById("userMail").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
    document.getElementById("repeat_password").value = "";

}

/* ============================ Bubbles ====================== */
function addBubles(){
    for(var i = 0; i <= 20 ;i++){
      var div = document.createElement("div");
      div.classList.add("bubble");
      document.getElementById("bubbles").appendChild(div);
    }
  }