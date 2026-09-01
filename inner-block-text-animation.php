<?php
/**
 * Plugin Name: Inner Text Animator
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Update URI: false
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: inner-block-text-animation
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'IBTA_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'IBTA_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'IBTA_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'IBTAPlugin' ) ){
	class IBTAPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new IBTAPlugin();
}
