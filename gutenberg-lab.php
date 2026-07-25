<?php
/**
 * Plugin Name: Gutenberg Lab
 * Plugin URI: https://github.com/cloudaziz/gutenberg-lab
 * Description: Learn Gutenberg by building real WordPress blocks from scratch.
 * Version: 0.0.1
 * Requires at least: 6.8
 * Requires PHP: 8.1
 * Author: Md Abdul Aziz
 * License: GPL-2.0-or-later
 * Text Domain: gutenberg-lab
 */

if (! defined('ABSPATH')) {
    exit;
}

/**
 * Register Gutenberg blocks.
 */
function gutenberg_lab_register_blocks() {
    register_block_type(__DIR__ . '/build');
}

add_action('init', 'gutenberg_lab_register_blocks');
