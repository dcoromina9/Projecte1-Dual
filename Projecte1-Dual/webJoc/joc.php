<?php
session_start();
require "requirelanguage.php";
?>
<!DOCTYPE html>
<html lang="ca">

<head>
    <title><?php echo $titol; ?></title>
    <link rel="stylesheet" href="style.css">
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-auth.js"></script>
    <script src="login.js"></script>
    <script src="../game/script.js" defer></script>

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

        <div class="navbar">
            <nav>
                <div>
                    <ul>
                        <a id="propietats" href="../login/login.html"><?php echo $login; ?></a>
                        <a id="propietats" href="../registrar/registrar.html"><?php echo $register; ?></a>
                        <a id="propietats" href="../ranking/ranking.html"><?php echo $ranking; ?></a>
                    </ul>

                </div>

                <div class="idioma">
                    <div>
                        <a href="changelanguage.php?language=es">
                            <img class="band1" src="imatges/es.png">
                        </a>

                        <a href="changelanguage.php?language=ca">
                            <img class="band2" src="imatges/ca.png">
                        </a>

                        <a href="changelanguage.php?language=en">
                            <img class="band3" src="imatges/en.jpg">
                        </a>
                    </div>
                </div>
            </nav>
        </div>

        <div class="bg-text">

            <h2><?php echo $titol; ?></h2>
            <table class="center">
                <h1 class="Game-Title">Tres en ratlla</h1>

                <tr>
                    <td id="cell1" class="cell"></td>
                    <td id="cell2" class="cell"></td>
                    <td id="cell3" class="cell"></td>
                </tr>
                <tr>
                    <td id="cell4" class="cell"></td>
                    <td id="cell5" class="cell"></td>
                    <td id="cell6" class="cell"></td>
                </tr>
                <tr>
                    <td id="cell7" class="cell"></td>
                    <td id="cell8" class="cell"></td>
                    <td id="cell9" class="cell"></td>
                </tr>
            </table>


        </div>
    </div>
</body>

</html>