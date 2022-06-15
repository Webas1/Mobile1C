<?php
//echo phpinfo();
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
$servername="DESKTOP-9U8KI06\\TEST";
$connectinfo=array ( "Database"=>"Mobile","CharacterSet" => "UTF-8");
$conn=sqlsrv_connect($servername,$connectinfo);
//"UID" => "Mobile", "PWD" => "Bkmz1812",
/*if( $conn ){echo "Connection established.\n";}
else
{
echo "Connection could not be established.\n";
DIE( print_r( sqlsrv_errors(), true));
}*/

$i=0;
$load= "SELECT * FROM Oborudovan";

$oborudovanie=sqlsrv_query($conn,$load);
//var_dump($test);
$oborud=array();
$sel=array();
$opis=array();
while( $obj = sqlsrv_fetch_array( $oborudovanie )) {
    $ob=$obj['Oborydovanie'];
    $oborud[]=[$ob];
    $se=$obj['Sell'];
    $sel[]=[$se];
    $op=$obj['Opisanie'];
    $opis[]=[$op];
    
};
$test = array(
   "Oborudovanie"=> $oborud, 
   "Sell"=>$sel,
   "Opisanie" => $opis
);
echo json_encode($test,JSON_UNESCAPED_UNICODE);




?>