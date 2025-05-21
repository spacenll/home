<?php
session_start();

$hashedPassword = '$2y$10$rMNE3XTwhkfzDkPyiM/1JODU3qD5DJH89xCcmRUYk2C52XoLOACfy';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = $_POST['password'];

    if (password_verify($input, $hashedPassword)) {
        $_SESSION['logged_in'] = true;
        header("Location: invoices.php");
        exit;
    } else {
        header("Location: login.php?error=1");
        exit;
    }
}
?>
