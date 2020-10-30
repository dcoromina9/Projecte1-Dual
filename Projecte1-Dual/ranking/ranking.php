<?php
session_start();
require "requirelanguage.php";
?>
    <!DOCTYPE html>
    <html lang="ca">

    <head>
        <title>
            
        </title>
        <link rel="stylesheet" href="style.css">
        <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.8.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.8.0/firebase-database.js"></script>
        <script src="ranking.js"></script>


        <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>

    <body>

        <div class="bg-image">
            <div id="bubbles" class="bubbles">

            </div>
                    <div class="idioma">
                        <div>
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
                    </div>
            
            </div>

            <div class=" bg-text ">

                <h2>
                    <?php echo $Ranking;?>
                </h2>
                <div>
                    <table id="dataTable">
                        <thead>
                            <th>
                                <?php echo $nomRanking;?>
                            </th>
                            <th id="mostrar ">
                                <?php echo $puntsRanking;?>
                            </th>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <a href="../game/joc.php"><?php echo $again;?></a>

            </div>
        </div>


    </body>

    </html>