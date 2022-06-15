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
$psw=$data['Password'];
$loadL="SELECT Login FROM Klient WHERE Login='$login'";
$stmt=sqlsrv_query($conn,$loadL);
$Lgn = sqlsrv_fetch_array($stmt);


if( empty($Lgn) ) {
    $test=0;
    echo json_encode($test,JSON_UNESCAPED_UNICODE);
}
else{$loadP="SELECT Password FROM Klient WHERE Login='$login'";
$zap=sqlsrv_query($conn,$loadP);
$Parol = sqlsrv_fetch_array($zap);
$Parol = password_verify($psw,$Parol['Password']);
$test=0;
    if ($Parol===false){
        $test=0;
        echo json_encode($test,JSON_UNESCAPED_UNICODE);
    }
    else{$test=1;
    echo json_encode($test,JSON_UNESCAPED_UNICODE);}
}
//echo json_encode($test,JSON_UNESCAPED_UNICODE);



?>