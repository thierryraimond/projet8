<?php
// http://localhost/sokoban/request.php?isRequest=true&name=Teddyyu&password=1234569&request=trucmuche
// SELECT * FROM `users` JOIN `score` ON `users`.`name` = `score`.`playerName`	
error_reporting(E_ALL);
include("account.php");

$requestName = getParam("request", "POST");

/*
 * @sendScore Envoi le score du joueur sur le serveur
 * @getScore Récupère le score du joueur
 * @getBestScore Récupère les dix meilleurs scores des joueurs
 * @getProgress Récupère la progression du joueur
 */
switch ($requestName) {
	case 'sendScore':
		$level = getParam("level", "POST");
		$score = getParam("score", "POST");
		$userId = getParam("userId", "POST");
		$adventure = getParam("adventure", "POST");
		$request = "
				SELECT * 
				FROM `score` 
				WHERE level='" . $level . "' and userId='" . $userId . "' and adventureId='".$adventure."'";
		$result = SQLRequest($connexion, $request);

		if (!$result) {
			$request = "INSERT INTO  `score` (
			`scoreId` ,
			`level` ,
			`score` ,
			`userId`,
			`adventureId`
			)
			VALUES (
			NULL ,  '" . $level . "',  '" . $score . "', '" . $userId . "', '".$adventure."'
			);";
			$result = SQLRequest($connexion, $request);
			echo json_encode('score insered');
		} else {
			$request = "UPDATE `score` SET `score`='" . $score . "' WHERE `userId`='" . $userId . "' and `level`='" . $level . "' and `adventureId`='".$adventure."'  and `score`<2";
			$result = SQLRequest($connexion, $request);
			echo json_encode('score updated');
		}
		break;
	case 'getBestScore':
// 		$request = "SELECT sum(score) as score, playerName
// 		FROM `score`
// 		GROUP BY playerName
// 		ORDER BY sum(score) DESC";
		$request = " 
			SELECT SUM(score.score) as score, user.name as playerName
			FROM score
			JOIN user ON score.userId = user.userId
			WHERE score.adventureId = '1'
			GROUP BY score.userId
			ORDER BY SUM(score.score) DESC";
		$result = SQLRequest($connexion, $request);
		echo json_encode($result);
		break;
	case 'getProgress':
		$userId = getParam("userId", "POST");
		$request = "SELECT * FROM `score` WHERE `userId`='" . $userId . "'";
		$result = SQLRequest($connexion, $request);
		echo json_encode($result);
		break;
	case 'getUserId':
		$name = getParam("name", "POST");
		$password = getParam("password", "POST");
		$request = "SELECT userId FROM `user` WHERE `name`='" . $name . "'";
		$result = SQLRequest($connexion, $request);
		echo json_encode($result);
		break;
	default:
		echo 'Error: bad request name';
		break;
}
?>