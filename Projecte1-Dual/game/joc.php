<?php
session_start();
require "requirelanguage.php";
?>
    <!DOCTYPE html>
    <html lang="ca">

    <head>
        <title>
            <?php echo $titol;?>
        </title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>

        <div class="bg-image">
            <div id="bubbles" class="bubbles">
            </div>

                    <div class="idioma">
                        <div>
                            
                            <a href="../index.php">
                                <img class="band1" src="../imgs/lgout.png">
                            </a>
                            
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
                
            <div class="bg-text">

                <h2>
                    <?php echo $titol;?>
                </h2>

                <table class="center">
                    

                    <tr>
                        <td id="cell0" class="cell"></td>
                        <td id="cell1" class="cell"></td>
                        <td id="cell2" class="cell"></td>
                    </tr>
                    <tr>
                        <td id="cell3" class="cell"></td>
                        <td id="cell4" class="cell"></td>
                        <td id="cell5" class="cell"></td>
                    </tr>
                    <tr>
                        <td id="cell6" class="cell"></td>
                        <td id="cell7" class="cell"></td>
                        <td id="cell8" class="cell"></td>
                    </tr>
                </table>



            </div>
        </div>
        <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-auth.js"></script>
        <script src="login.js"></script>
        <script src="script.js" defer></script>
    </body>

    </html>