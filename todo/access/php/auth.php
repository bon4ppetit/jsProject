<?php
  
  $link = mysqli_connect('localhost', 'root', 'root', 'todo');

  $query = "SELECT pass FROM `users` WHERE login=?";


  $stmt = $link->prepare($query);
  $stmt->bind_param('s', $login);

  $login = $_POST['reg-login'];
  $pass = $_POST['reg-pass'];

  $stmt->execute();

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  $stmt->close;

  var_dump($row);

  $new_url = 'http://todo.loc/index.html';
  header('Location: ' . $new_url);
?>