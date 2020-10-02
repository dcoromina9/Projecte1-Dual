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


    function register(){
      var email = document.getElementById("userMail").value;
      var password = document.getElementById("password").value;

      const newUser = auth.createUserWithEmailAndPassword(email, password);
      newUser.catch(e => alert(e.message));

      document.getElementById("userMail").value = "";
      document.getElementById("password").value = "";
    
    }





