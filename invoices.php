<?php
session_start();

// تحقق من الجلسة
if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
    header("Location: login.php");
    exit;
}

$invoicesDir = __DIR__ . '/INVOICES';
$files = scandir($invoicesDir);
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>قائمة الفواتير</title>
    <style>
        body {
            font-family: Arial;
            padding: 40px;
            background: #f2f2f2;
        }
        h2 {
            text-align: center;
        }
        ul {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            list-style: none;
            box-shadow: 0 0 10px #ccc;
        }
        li {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        a {
            text-decoration: none;
            color: #007bff;
        }
    </style>
</head>
<body>

<h2>📄 قائمة الفواتير</h2>
<ul>
<?php
foreach ($files as $file) {
    if ($file === '.' || $file === '..') continue;
    echo "<li><a href='INVOICES/$file' target='_blank'>$file</a></li>";
}
?>
</ul>

</body>
</html>
