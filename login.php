<?php
session_start();

// إذا تم إرسال النموذج
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST['password'];

    // تحقق من كلمة السر
    if ($password === "9709!") {
        $_SESSION['authenticated'] = true;
        header("Location: invoices.php");
        exit;
    } else {
        $error = "كلمة السر غير صحيحة!";
    }
}
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>تسجيل الدخول</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            padding: 100px;
            background: #f8f9fa;
        }
        form {
            background: white;
            padding: 30px;
            display: inline-block;
            border-radius: 10px;
            box-shadow: 0 0 10px #aaa;
        }
        input[type="password"] {
            padding: 10px;
            font-size: 16px;
            margin: 10px 0;
            width: 200px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
        }
        .error {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<h2>أدخل كلمة السر للدخول إلى الفواتير</h2>

<form method="POST">
    <input type="password" name="password" placeholder="كلمة السر" required>
    <br>
    <button type="submit">دخول</button>
</form>

<?php if (isset($error)): ?>
    <div class="error"><?= $error ?></div>
<?php endif; ?>

</body>
</html>
