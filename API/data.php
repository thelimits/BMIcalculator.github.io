<?php
$host = "localhost";
$username = "root";
$password = "";

try 
{
    $conn = new PDO("mysql:host=$host;dbname=databmidb", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    echo "Connection is failed: " . $e->getMessage();
}

$response = array('success' => false);

if(isset($_POST['name']) && $_POST['name']!='' && isset($_POST['usia']) && $_POST['usia']!='' && isset($_POST['tinggi']) && $_POST['tinggi']!='' && isset($_POST['berat']) && $_POST['berat']!='')
{
	$sql = "INSERT INTO bmidata(Nama, Usia, TinggiBadan, BeratBadan, BMI) VALUES('".addslashes($_POST['name'])."', '".addslashes($_POST['usia'])."', '".addslashes($_POST['tinggi'])."' , '".addslashes($_POST['berat'])."', '".addslashes($_POST['BMI'])."')";
	
	if($conn->query($sql))
	{
		$response['success'] = true;
	}
}

echo json_encode($response);