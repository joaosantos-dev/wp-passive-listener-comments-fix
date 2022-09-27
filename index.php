<?php

/**
 * Plugin Name: Non Passive Comments JS Fix
 * Description: Fixes the error pointed out in lighthouse related to the passive listener.
 * Author: João Santos
 * Version: 1.0.0
 * Author URI: https://linkedin.com/in/joaovpdls
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

/* Handling non passive WP comment.js file */
function wp_dereg_script_comment_reply(){wp_deregister_script( 'comment-reply' );}
add_action('init','wp_dereg_script_comment_reply');

function wp_insert_comments_custom_code() {
	wp_enqueue_script( 'comments-custom-code', plugins_url( 'comments-js-passive-handler.js', __FILE__ ), array('jquery'), '', false );
}
add_action( 'wp_enqueue_scripts', 'wp_insert_comments_custom_code' );
