<?php
session_start();
require "requirelanguage.php";
?>
    <!DOCTYPE html>
    <html lang="ca">

    <head>
        <title><?php echo $titol;?></title>
        <link rel="stylesheet" href="style.css">
        <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-auth.js"></script>
        <script src="login.js"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>

    <body>

        <div class="bg-image">
            <div class="bubbles">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>

            </div>

            <div class="idioma">

                <img class="band1" src="imatges/es.png">

                <img class="band2" src="imatges/ca.png">

                <img class="band3" src="imatges/en.jpg">


            </div>

            <div class="bg-text">

                <h2><?php echo $titol;?></h2>
                <br>
                <input id="userMail" type="text" placeholder="Login" size="25">
                <br><br>
                <input id="password" type="password" placeholder="Password" size="25">
                <br><br>

                <button id="btnSubmit" onclick="login()" type="submit"><?php echo $login;?></button>
                <br></br>
                <a href="../registrar/registrar.html"><?php echo $noCompte;?></a>

            </div>
        </div>
    </body>

    </html>