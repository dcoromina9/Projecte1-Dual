<?php
session_start();
require "requirelanguage.php";
?>
    <!DOCTYPE html>
    <html lang="ca">

    <head>
        <title><?php echo $titol;?></title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>

    <body>

        <div class="bg-image">
            <div id="bubbles" class="bubbles">
            </div>

            <div class="bg_music">
                <audio id="audio" src="audio/login.mp3" autoplay loop></audio>
                <button class="btn_music">
        <img class="play" id="play" src="imgs/2x/baseline_play_circle_outline_black_18dp.png">
        <img class="stop" id="stop" src="imgs/2x/baseline_pause_circle_outline_black_18dp.png">
      </button>
            </div>

            <div class="idioma">

                <a href="changelanguage.php?language=es">
                    <img class="band1" src="imgs/banderes/es.png">
                </a>

                <a href="changelanguage.php?language=ca">
                    <img class="band2" src="imgs/banderes/ca.png">
                </a>

                <a href="changelanguage.php?language=en">
                    <img class="band3" src="imgs/banderes/en.jpg">
                </a>

            </div>

            <div class="bg-text">

                <h2>
                    <?php echo $titol;?>
                </h2>
                <br>
                <input id="userMail" type="text" placeholder="Login" size="25">
                <br><br>
                <input id="password" type="password" placeholder="Password" size="25">
                <br><br>

                <button id="btnSubmit" onclick="login()" type="submit"><?php echo $login;?></button>
                <br></br>
                <img onclick="googleLogin()" src="imgs/googleLog.png" height="30px" width="30px">
                <br></br>

                <img class="ranking_btn" id="ranking_btn" src="imgs/ranking_btn.png">

                <a href="registrar/registrar.php">
                    <?php echo $noCompte;?>
                </a>

            </div>
        </div>

        <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-auth.js"></script>
        <script src="login.js"></script>
    </body>

    </html>