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
$data = json_decode(file_get_contents('php://input'), true);
$login=$data['LoginP'];
//$login='baramik';
$loadL="SELECT * FROM Zakaz WHERE Login='$login'";
$stmt=sqlsrv_query($conn,$loadL);



$oborud=array();
$sel=array();
$day=array();
$date=array();
while( $obj = sqlsrv_fetch_array( $stmt )) {
   // print_r($obj);
    $ob=$obj['Oborudovanie'];
    $oborud[]=[$ob];
    $se=$obj['Sell'];
    $sel[]=[$se];
    $op=$obj['Day'];
    $day[]=[$op];
    $dt=$obj['Date'];
    $dt->format('m/d/Y ');
    $dt=$dt->format('m/d/Y');
    
    //$dt = DateTime::createFromFormat('d-m-y', $dt['date']);
    $date[]=[$dt];
};

$test = array(
   "Oborudovanie"=> $oborud, 
   "Sell"=>$sel,
   "Day" => $day,
   "Date" => $date,
);
echo json_encode($test,JSON_UNESCAPED_UNICODE);



?>