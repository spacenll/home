<?php session_start(); ?>
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>تسجيل الدخول</title>
  <style>
    body { font-family: Arial; text-align: center; padding-top: 50px; background-color: #f9f9f9; }
    input { padding: 10px; margin: 10px; font-size: 16px; }
    button { padding: 10px 20px; font-size: 16px; }
  </style>
</head>
<body>
  <h2>أدخل كلمة السر للوصول إلى الفواتير</h2>
  <form action="check_login.php" method="POST">
    <input type="password" name="password" placeholder="كلمة السر" required>
    <br>
    <button type="submit">دخول</button>
  </form>
  <?php if (isset($_GET['error'])): ?>
    <p style="color:red;">كلمة السر خاطئة!</p>
  <?php endif; ?>
</body>
</html>
