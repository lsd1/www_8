<?php

namespace Vendor\Spout\Common;

/**
 * Class Singleton
 * Defines a class as a singleton.
 *
 * @package Vendor\Spout\Common
 */
trait Singleton
{
    protected static $instance;

    /**
     * @return static
     */
    final public static function getInstance()
    {
        return isset(static::$instance)
            ? static::$instance
            : static::$instance = new static;
    }

    /**
     * Singleton constructor.
     */
    final private function __construct()
    {
        $this->init();
    }

    /**
     * Initializes the singleton
     * @return void
     */
    protected function init() {}

    final private function __wakeup() {}
    final private function __clone() {}
}
