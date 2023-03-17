<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitfa4e482e86049aa2a0e6b47fe1a58e7d
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitfa4e482e86049aa2a0e6b47fe1a58e7d', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitfa4e482e86049aa2a0e6b47fe1a58e7d', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitfa4e482e86049aa2a0e6b47fe1a58e7d::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
