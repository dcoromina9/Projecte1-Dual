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



/* ============================ Bubbles ====================== */
addEventListener("load", function() {
    for (var i = 0; i <= 20; i++) {
        var div = document.createElement("div");
        div.classList.add("bubble");
        document.getElementById("bubbles").appendChild(div);
    }
});

var users = [];
var bests = [];
var sortBest = [];
var BreakException = {};
var limitRank = 0;
var database = firebase.database().ref('users');
var img_top1 = document.createElement("img");
img_top1.src = "../imgs/ranking_img/top1.png";
img_top1.style.height = "30px";
img_top1.style.width = "50px";



database.on('value', function(snapshot) {
    snapshot.forEach(element => {
        users.push(element.val().userName);
        users.push(element.val().points);
        bests.push(users);
        users = [];
    });

    sortBest = (bests.sort((a, b) => b[1] - a[1]));


    try {
        sortBest.forEach(element => {
            limitRank++;
            var tBody = document.getElementById('dataTable').lastElementChild;
            var tr1 = document.createElement('tr');
            tBody.appendChild(tr1);
            var dato1 = document.createElement('td');
            dato1.innerText = element[0];
            tr1.appendChild(dato1);
            var dato2 = document.createElement('td');
            dato2.innerText = element[1];
            tr1.appendChild(dato2);

            if (limitRank == 3) throw BreakException;
        });

        var user = firebase.auth().currentUser;

        if (user != null) {
            console.log(user.email + " --- " + user.points);
        } else {
            console.log("No user loged In");
        }





    } catch (e) {
        if (e !== BreakException) throw e;
    }
});