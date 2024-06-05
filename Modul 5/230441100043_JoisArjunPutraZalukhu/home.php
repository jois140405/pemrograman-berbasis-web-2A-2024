<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Beranda</title>
<link rel="stylesheet" href="home.css">
</head>
<body>

<header>
<h1>

<?php
session_start();

// Periksa apakah pengguna telah login
if(isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    echo "Selamat datang, $username!";
} else {
    // Jika pengguna belum login, arahkan kembali ke halaman login
    header("Location: index.php");
    exit();
}
?>

</h1>
</header>

<nav>
    <a href="home.php">Beranda</a>
    <a href="tabel.php">Tabel</a>
    <a href="index.php">Log out</a>
</nav>

<div class="container">

    <section>
        <h2>Tentang Kami</h2>
        <p>mau tau apa</p>
    </section>

    <section>
        <h2>Layanan</h2>
        <p>tidak menerima layanan</p>
    </section>

    <section>
        <h2>Kontak</h2>
        <p>Email: yuliatinagustina24@gmail.com</p>
        <p>Telepon: 082139844508</p>
    </section>

</div>

</body>
</html>
