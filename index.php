<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="furniture online shop">
	<title>FIL</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="dist/css/app.css?v=<?php echo date("Y-m-d(H:i:s)");?>">
</head>
<body class="is-fixed" data-barba="wrapper"  data-scroll-container>
    <!-- PRELOADER -->
    <div class="preloader js_preloader">
        <div class="preloader__el">
	        <div class="preloader__el-loader">
                <div class="main-logo">fil</div>
            </div>
        </div>
    </div>
    <!-- PRELOADER END -->
    <!-- POP-UP -->
    <?php include "views/parts/popup-request.php" ?>
    <!-- POP-UP END -->
    <!-- CURSOR -->
    <div class="cursor circle-el js_cursor"></div>
    <!-- CURSOR  END -->
    <!-- PAGE TRANSITION -->
    <div class="page-transition is-loaded js_page-transition">
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
        <div class="page-transition__itm"></div>
    </div>
    <!-- PAGE TRANSITION END -->
    <div class="blur-backgrnd js_blur">
        <?php include "views/layout/header.php" ?>
        <?php include "views/layout/main.php" ?>
        <?php include "views/layout/footer.php" ?>
    </div>    
    <script defer src="dist/js/app.js?v=<?php echo date("Y-m-d(H:i:s)");?>"></script>
</body>
</html>