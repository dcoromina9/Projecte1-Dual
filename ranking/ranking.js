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

function busca_user() {    
   
var db = firebase.database();
var ref = db.ref("users");
     
var table = document.getElementById("taula");
    
//limpia la tabla
table.innerHTML = "";
 
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    
ref.orderByChild("userName").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
     
  var d = snapshot.val();        
        
  {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.points;
  cell2.innerHTML = d.userName;
  }
 
        
});
 
}
