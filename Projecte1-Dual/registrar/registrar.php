<?php
session_start();
require "requirelanguage.php";
?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <title><?php echo $titol;?></title>
        <link href="style.css" rel="stylesheet">

        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-database.js"></script>
        <script src="register.js"></script>

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
                <div class="form">
                    <h2><?php echo $register;?></h2>
                    <br>
                    <input id="userMail" type="text" placeholder="Email" size="25" required autocomplete="off"><br>
                    <input id="username" type="text" placeholder="User Name" size="25" required autocomplete="off"><br>
                    <input id="password" type="password" placeholder="Password" size="25" required> <br>
                    <input id="repeat_password" type="password" placeholder="Repeat Password" size="25" required> <br>
                    <button id="btnSubmit" onclick="register()" type="submit"><?php echo $register;?></button>
                    <br></br>
                    <a href="../login/login.html"><?php echo $compteFet;?></a>
                </div>
            </div>
        </div>


    </body>

    </html>