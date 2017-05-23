<?php
// http://localhost/sokoban/request.php?isRequest=false&name=Teddyyu&password=1234569
error_reporting(E_ALL);
include("config.php");

$connexion = new PDO($source, $user, $motDePasse);

$name = getParam("name", "POST");
$password = getParam("password", "POST");
$isRequest = getParam("isRequest", "POST");

// $name = getParam("name", "GET");
// $password = getParam("password", "GET");
// $isRequest = getParam("isRequest", "GET");

$arr = SQLRequest($connexion, "SELECT * FROM users WHERE name='" . $name . "'");

if (!$arr) {
	$request = "INSERT INTO  `users` (
	`id` ,
	`name` ,
	`password` ,
	`date`
	)
	VALUES (
	NULL ,  '" . $name . "',  '" . $password . "', 
	CURRENT_TIMESTAMP
	);";

	$result =  SQLRequest($connexion, $request);
//	echo "created";
// 	echo json_encode("AccountCreated");
 	echo json_encode(array(
 			"message" => "AccountCreated"
 	));
	die();
} else {
	if ($arr[0]['password'] == $password) {
		if ($isRequest == "false") {
//			echo "connected";
//  		echo json_encode("GoodPassword");
 			echo json_encode(array(
 					"message" => "GoodPassword"
 			));
			die();
		}
	} else {
//		echo "wrongpassword";
// 		echo json_encode("WrongPassword");
 		echo json_encode(array(
 				"message" => "WrongPassword"
 		));
		die();
	}
}


/*
 * Fait une requête SQL.
 * @connexion - Objet PDO de la connexion SQL
 * @request Requête SQL à envoyer.
 * Return Array - Resultat de la requête.
 * 		  False - Pas de resultats retourné.
 */
function SQLRequest($connexion, $request) {
	$result = $connexion->query($request);
	$data = array();
	if ($result->rowCount() == 0) {
		return false;
	} else {
		foreach ($result as $line)
			array_push($data, $line);
	}
	return $data;
}


/*
 * Récupère un paramètre via post ou get.
 * @param Nom du paramètre à recuperer
 * @type Type du paramètre (GET ou POST)
 * Return Retourne la valeur du paramètre
 */
function getParam ($param, $type) {
	if ($type == "POST") $data = $_POST;
	if ($type == "GET") $data = $_GET;
	if (!isset($data)) {
		echo 'Error: incorrect type, must be GET or POST';
		die();
	}

	if (isset($data[$param])) {
		return htmlspecialchars($data[$param]);
	} else {
		echo 'Error: ' . $param . ' not defined.';
		die();
	}
}



?>