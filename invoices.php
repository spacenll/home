<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>قائمة الفواتير</title>
  <style>
    body { font-family: Arial; direction: rtl; padding: 20px; background-color: #fff; }
    h2 { color: #333; }
    ul { list-style-type: none; padding: 0; }
    li { margin: 10px 0; }
    a { text-decoration: none; color: #0066cc; }
    a:hover { text-decoration: underline; }
    .logout { position: fixed; left: 20px; top: 20px; }
  </style>
</head>
<body>
  <a class="logout" href="logout.php">تسجيل الخروج</a>
  <h2>قائمة الفواتير</h2>
  <ul>
    <?php
      $dir = "INVOICES";
      $files = scandir($dir);
      foreach ($files as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'pdf') {
          echo "<li><a href='$dir/$file' target='_blank'>$file</a></li>";
        }
      }
    ?>
  </ul>
</body>
</html>
