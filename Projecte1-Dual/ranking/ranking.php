<?php
session_start();
require "requirelanguage.php";
?>
    <!DOCTYPE html>
    <html lang="ca">

    <head>
        <title><?php echo $titol;?></title>
        <link rel="stylesheet" href="style.css">
        <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.8.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.8.0/firebase-database.js"></script>
        <script src="ranking.js"></script>


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
                            <a id="propietats" href="../login/login.html"><?php echo $login;?></a>
                            <a id="propietats" href="../registrar/registrar.html"><?php echo $register;?></a>
                            <a id="propietats" href="../webJoc/joc.html"><?php echo $jugar;?></a>
                        </ul>

                    </div>

                    <div class="idioma">
                        <div>
                            <img class="band1" src="imatges/es.png">

                            <img class="band2" src="imatges/ca.png">

                            <img class="band3" src="imatges/en.jpg">

                        </div>
                    </div>
                </nav>
            </div>

            <div class="bg-text">

                <h2><?php echo $Ranking;?></h2>
                <div>
                    <table id="dataTable">
                        <thead>
                            <th><?php echo $nomRanking;?></th>
                            <th id="mostrar"><?php echo $puntsRanking;?></th>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <a href="#joc"><?php echo $again;?></a>

            </div>
        </div>


    </body>

    </html>