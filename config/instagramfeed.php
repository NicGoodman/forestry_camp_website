<?php

return [
    // User name or hash tag to fetch from Instagram.
    'instagramUser' => 'forestrycamp',

    // Use codemonauts proxy to get the Instagram page
    'useProxy' => true,

    // The proxy key to use for authentication
    'proxyKey' => 'ahkaibicaiXaiGoh2OhR3eesibah9eil',

    // Timeout in seconds waiting for the Instagram page to load.
    'timeout' => 5,

    // Use Guzzle instead of php's file stream
    'useGuzzle' => false,

    // Dump Instagram response to file for debugging purpose
    'dump' => false,

    // Using your own user agent string, remove this array key to use a common user agent of a well known browser
    'userAgent' => '',
];