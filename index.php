<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
	<title>FIL</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
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