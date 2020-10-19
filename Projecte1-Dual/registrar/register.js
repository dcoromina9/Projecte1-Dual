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


    function register(){
      var currentUser = auth.currentUser;
      if(currentUser != null){
        auth.signOut();
      }

      var email = document.getElementById("userMail").value;
      var password = document.getElementById("password").value;
      var name = document.getElementById("username").value;
      validar();
      const newUser = auth.createUserWithEmailAndPassword(email, password).then(e => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          alert(errorMessage);
        });

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              //Afagir el camp punts a la db juntament amb el userID.
            currentUser = auth.currentUser;
            db.ref("/users/"+currentUser.uid).set({
            userID: currentUser.uid,
            userName: name,
            points: 0
            });
            location.replace("../index.html");

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

    function validar(){

      var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

      if (!password.value.match(passw)){
        alert("Use 6 or more characters with a combination of Uppercase, Lowercase letters and numbers")
      }
      else if(!password.value.match(repeat_password.value)){
        alert("Password doesn't match")
      }else{
        alert("Welcome")
      }
    }
