// Initialize Firebase
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

var refDB = firebase.database().ref().child('users');

refDB.on('value', gotData, errData);

function gotData (data) {

    var scores = data.val();
    var keys = Object.keys(scores);
    for ( var i = 0; i < keys.length; i++ ){
        var k = keys[i];
        var correo = scores[k].points;
        var nombre = scores[k].userName;

        var tBody = document.getElementById('dataTable').lastElementChild;
        var tr1 = document.createElement('tr');
        tBody.appendChild(tr1);
        var dato1 = document.createElement('td');
        dato1.innerText = nombre;
        tr1.appendChild(dato1);
        var dato2 = document.createElement('td');
        dato2.innerText = correo;
        tr1.appendChild(dato2);
        var dato3 = document.createElement('td');
    };
}

function errData (err) {
    console.log('Error!');
    console.log(err);
}

var boton = document.getElementById('btn');

boton.addEventListener('click', descargarExcel);

function descargarExcel() {
    //Creamos un Elemento Temporal en forma de enlace
    var tmpElemento = document.createElement('a');
    // obtenemos la información desde el div que lo contiene en el html
    // Obtenemos la información de la tabla
    var data_type = 'data:application/vnd.ms-excel';
    var tabla_div = document.getElementById('dataTable');
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    tmpElemento.href = data_type + ', ' + tabla_html;
    var nombreExcel = document.getElementById('nameDownload').value;
    //Asignamos el nombre a nuestro EXCEL
    tmpElemento.download = nombreExcel + '.xls';
    // Simulamos el click al elemento creado para descargarlo
    tmpElemento.click();
}