<?php
session_start();

$hashedPassword = '$2y$10$UvTK6Rvzq3uDFrxZTEMN..cmHQOQ3inF8cUV/SOiYY1cI4ZPzYvPy';

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
