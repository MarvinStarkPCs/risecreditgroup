<?php

// Entry point for shared hosting where the domain root is the project root.
// Place this file in the directory where your domain points (e.g. public_html/).

chdir(__DIR__.'/public');
require __DIR__.'/public/index.php';
