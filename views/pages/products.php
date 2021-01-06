<!-- head, meta tags, css ..-->
<?php include "../main-parts/top-part.php" ?>
<!-- head, meta tags, css .. end-->
<div class="products page-outer js_container" data-barba="container" data-page-name="products" data-barba-namespace="products">
    <section class="products__top section-main">
        <img src="../../dist/img/products/products-hero.jpg" alt="backgrd" class="products__top-backgrd">
        <div class="products__top-inner section-main__inner page-inner">
            <h1 class="products__top-ttl section-main__ttl">Products</h1>
            <div class="products__top-itms section-main__itms">
                <a href="#" class="products__top-scroll">Scroll</a>
            </div>
        </div>
        <div class="blur-line"></div>
    </section>
    <section class="products__lnks page-inner">
        <div class="products__lnks-inner">
            <div class="products__lnks-grp">
                <?php include "../parts/product-cards/dining-chair.php" ?>
                <?php include "../parts/product-cards/4leg-stool.php" ?>
            </div>
            <div class="products__lnks-grp">
                <?php include "../parts/product-cards/lounge-chair.php" ?>
                <?php include "../parts/product-cards/noleg-stool.php" ?>
            </div>
            <div class="products__lnks-grp">
                <?php include "../parts/product-cards/coffee-table.php" ?>
                <?php include "../parts/product-cards/coat-tree.php" ?>
            </div>
        </div>
    </section>
</div>
<!-- js scripts -->
<?php include "../main-parts/bottom-part.php" ?>
<!-- js scripts end -->