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
      checkpassword();
      const newUser = auth.createUserWithEmailAndPassword(email, password);

      newUser.catch(e => alert(e.message));

      document.getElementById("userMail").value = "";
      document.getElementById("password").value = "";

    }

    function checkpassword(){

      password1 = document.getElementById("password").value;
      password2 = document.getElementById("repeat_password").value;
      var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
      if(!regularExpression.test(password1)){
        alert("Use 6 or more characters with a combination of Uppercase, Lowercase letters and numbers")
      }

        else if (password1 == ''){
          alert("Please enter Password.")
        }
        else if (password2 == '') {
          alert("Please enter confirm Password.")
        }
        else if (password1 != password2) {
          alert("\nPassword did not match: Please try again...")
          return false;

        }
        else{
          alert("Password Match: Welcome!")
          return true;
        }

    }
