<?php

// $mahasiswa =[
// 	[
// 		"nama" => "M Walid",
// 		"nrp" => "173040079",
// 		"email" => "m.walidnurfadhil@gmail.com"
// 	],
// 	[
// 		"nama" => "Egy Imaldi",
// 		"nrp" => "173040106",
// 		"email" => "imaldiEgy@gmail.com"
// 	],
// ];

$dbh = new PDO('mysql:host=localhost;dbname=test', 'root','');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;