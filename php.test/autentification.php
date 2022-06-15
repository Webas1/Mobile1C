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
$name=$data['Nameuser'];
$Email=$data['Email'];
$psw=$data['Password'];
$psww=password_hash($psw, PASSWORD_DEFAULT);
$number=$data['Number'];
$login=$data['Login'];
$t='dd';
$load="INSERT INTO Klient (Nameuser,Email,Number,Login,Password) VALUES ('$name','$Email','$number','$login','$psww')";
//mysqli_query($connect,"INSERT INTO `info` (`email`, `number`, `city`, `street`, `house`, `kvartira`) VALUES ('$Email', '$number', '$city', '$str', '$d', '$kv');");
//mysqli_query($connect,"INSERT INTO `password` (`email`, `pass`) VALUES ('$Email', '$psww')");
$stmt=sqlsrv_query($conn,$load);
if( $stmt === false ) {
    if( ($errors = sqlsrv_errors() ) != null) {
        foreach( $errors as $error ) {
            echo "SQLSTATE: ".$error[ 'SQLSTATE']."<br />";
            echo "code: ".$error[ 'code']."<br />";
            echo "message: ".$error[ 'message']."<br />";
        }
    }
}
else{
    echo 'Регистрация прошла успешно';
}
//echo json_encode($test,JSON_UNESCAPED_UNICODE);



?>