<?php
session_start();
require "requirelanguage.php";
?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <title>
            <?php echo $titol;?>
        </title>
        <link href="style.css" rel="stylesheet">
    </head>

    <body>
        <div class="bg-image">
            <div id="bubbles" class="bubbles">
            </div>

            <div class="bg_music">
                <audio id="audio" src="../audio/registre.mp3" autoplay loop></audio>
                <button class="btn_music">
                <img class="play" id="play" src="../imgs/2x/baseline_play_circle_outline_black_18dp.png">
                <img class="stop" id="stop" src="../imgs/2x/baseline_pause_circle_outline_black_18dp.png">
            </button>
            </div>

            <div class="idioma">

                <a href="changelanguage.php?language=es">
                    <img class="band1" src="../imgs/banderes/es.png">
                </a>

                <a href="changelanguage.php?language=ca">
                    <img class="band2" src="../imgs/banderes/ca.png">
                </a>

                <a href="changelanguage.php?language=en">
                    <img class="band3" src="../imgs/banderes/en.jpg">
                </a>


            </div>

            <div class="bg-text">
                <div class="form">
                    <h2>
                        <?php echo $register;?>
                    </h2>
                    <br>
                    <input id="userMail" type="text" placeholder="Email" size="25" required autocomplete="off"><br>
                    <input id="username" type="text" placeholder="User Name" size="25" required autocomplete="off"><br>
                    <input id="password" type="password" placeholder="Password" size="25" required> <br>
                    <input id="repeat_password" type="password" placeholder="Repeat Password" size="25" required> <br>
                    <button id="btnSubmit" onclick="register()" type="submit"><?php echo $register;?></button>
                    <br></br>
                    <a href="../index.html">
                        <?php echo $compteFet;?>
                    </a>
                </div>
            </div>
        </div>


        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-database.js"></script>
        <script src="register.js"></script>
    </body>

    </html>