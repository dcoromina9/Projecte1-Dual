<?php

if (empty($_SESSION["language"])) {

    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $_SESSION["language"]=$lang;
    if ($lang!="es")
    {
     $_SESSION["language"]="ca";   
    }
}
if (isset($_SESSION["language"]))
    
{
$lang=$_SESSION["language"]; 
}
switch ($lang){
    case "ca":
        //echo "PAGE ca";
        include("../language/ca.php");
        break;
    case "es":
        //echo "PAGE ES";
        include("../language/es.php");
        break;
    case "en":
        //echo "PAGE EN";
        include("../language/en.php");
        break;        
    default:
        //echo "PAGE EN - Setting Default";
        include("../language/ca.php");
        break;
}



?>