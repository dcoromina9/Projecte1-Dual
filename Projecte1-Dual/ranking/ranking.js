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

function gotData(data) {

    var points = [];
    var users = [];
    var punts = [];
    var usuaris = [];
    var sortPunts = [];
    var sortNoms = [];
    var database = firebase.database().ref('users');
    database.on('value', function(snapshot) {
        snapshot.forEach(element => {
            users.push(element.val().userName);
            points.push(element.val().points);
            usuaris.push(users);
            punts.push(points);

            points = [];
            users = [];
        });
        sortNoms = usuaris.sort((a, b) => a - b);
        sortPunts = punts.sort((a, b) => a > b);

    });


    for (var i = 0; i < 3; i++) {
        var tBody = document.getElementById('dataTable').lastElementChild;
        var tr1 = document.createElement('tr');
        tBody.appendChild(tr1);
        var dato1 = document.createElement('td');
        dato1.innerText = usuaris[i];
        tr1.appendChild(dato1);
        var dato2 = document.createElement('td');
        dato2.innerText = punts[i];
        tr1.appendChild(dato2);
    }

    console.log(sortPunts);


};


function errData(err) {
    console.log('Error!');
    console.log(err);
}