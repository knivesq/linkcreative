<?php
/**
 * The land template file
 *
 * @package WordPress
 * @subpackage Link Creative
 * @since Link Creative 1.0
 */
?>
<!DOCTYPE HTML>
<html manifest="" <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
     maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <!-- load other meta tags here -->

    <title><?php echo get_bloginfo("name");?></title>
    <?php wp_head(); ?>
</head>
<body>
<noscript>
    You need to enable JavaScript to run this app.
</noscript>


<div id="root" style="height:100%">

</div>
<script src="<?php echo get_template_directory_uri();?>/public/bundle.js"
        type="text/javascript">
</script>
<?php wp_footer(); ?>
</body>
</html>