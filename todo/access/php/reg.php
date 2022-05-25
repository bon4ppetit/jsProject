<?php
  mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'root', 'root', 'todo');

$stmt = $mysqli->prepare("INSERT INTO users(`login`, `pass`) VALUES (?, ?)");
$stmt->bind_param('ss', $login, $pass);

$login = $_POST['reg-login'];
$pass = password_hash($_POST['reg-pass'], PASSWORD_DEFAULT);


$stmt->execute();

  $new_url = 'http://todo.loc/index.html';
  header('Location: ' . $new_url);
?>