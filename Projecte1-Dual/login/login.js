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



function login(){

  var userMail = document.getElementById("userMail").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userMail, password).catch(function(error) {
    alert(errorMessage);
  });
  console.log("aki");
  document.getElementById("userMail").nodeValue = "";
  document.getElementById("password").nodeValue = "";
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      location.replace("../index.html");
    } else {
      alert("Email or password incorrect");
    }
  });
  
 

}