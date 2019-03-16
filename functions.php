<?php
/**
 * Enqueue scripts and styles.
 *
 * @since Link Creative 1.0
 */

function crecheem_register_fields() {
// Add Author Name
register_rest_field( 'post',
'author_name',
array(
'get_callback'		=> 'crecheem_get_author_name',
'update_callback'	=> null,
'schema'			=> null
)
);
// Add Featured Image
register_rest_field( 'post',
'featured_image_src',
array(
'get_callback'		=> 'crecheem_get_image_src',
'update_callback'	=> null,
'schema'			=> null
)
);
// Add Published Date
register_rest_field( 'post',
'published_date',
array(
'get_callback'		=> 'crecheem_published_date',
'update_callback'	=> null,
'schema'			=> null
)
);
}
add_action( 'rest_api_init', 'crecheem_register_fields' );

function crecheem_get_author_name($object, $field_name, $request) {
if($object['featured_media'] == 0){
return $object['featured_media'];
}
$feat_img_array = wp_get_attachment_image_src($object['featured_media'], 'thumbnail', true);
return $feat_img_array[0];
}

function crecheem_get_image_src( $object, $field_name, $request ) {
if($object[ 'featured_media' ] == 0) {
return $object[ 'featured_media' ];
}
$feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'thumbnail', true );
return $feat_img_array[0];
}

function crecheem_published_date($object, $field_name, $request) {
return get_the_time('F j, Y');
}

function crecheem_excerpt_length( $length ) {
return 20;
}
add_filter( 'excerpt_length', 'crecheem_excerpt_length' );