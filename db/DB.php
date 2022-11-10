<?php

namespace DB;

use DateTime;
use Error;
use Exception;
use Dotenv\Dotenv;
use Opis\Database\Database;
use Opis\Database\Connection;

$dotenv = Dotenv::createImmutable(__DIR__, '/../.env');
$dotenv->load();

define('DATABASE_NAME', $_ENV['DATABASE_NAME']);
define('DATABASE_HOST', $_ENV['DATABASE_HOST']);
define('DATABASE_USER', $_ENV['DATABASE_USER']);
define('DATABASE_PASSWORD', $_ENV['DATABASE_PASSWORD']);

class DB {

    private const DATABASE = DATABASE_NAME;
    private const HOST = DATABASE_HOST;
    private const USER = DATABASE_USER;
    private const PASSWORD = DATABASE_PASSWORD;

    private const CONNECTION_STRING = "mysql:host=".DB::HOST.";dbname=".DB::DATABASE.";charset=utf8";

    private static Connection $conn;
    private static Database $db;

    public static function createConnection() {
        try {
            DB::$conn = new Connection(DB::CONNECTION_STRING, DB::USER, DB::PASSWORD);
            DB::$db = new Database(DB::$conn);
        } catch (Exception $e) {
            throw new Error($e->getMessage());
        }

        return self::class;
    }

    public static function getDB(): Database {
        DB::$conn = new Connection(DB::CONNECTION_STRING, DB::USER, DB::PASSWORD);
        DB::$db = new Database(DB::$conn);
      
        return DB::$db;
    }

    public static function getConnection(): Connection {
        return DB::$conn;
    }

    public static function rollbackMigrations(string $path) {
        if (is_file($path)) {
            require_once $path;
            $currentDate = (new DateTime())->format('d-m-Y H:i:s')  ;
            $migrationFile = pathinfo($path, PATHINFO_FILENAME);
            DB::$db->from('migrations')->where('migration_name')->is($migrationFile)->delete();
            $instance = new $migrationFile();
            $instance->down();
            echo "[{$currentDate}] - Migration rollback - {$migrationFile}" . PHP_EOL;
            return;
        }        

        $migrationFiles = scandir($path);

        foreach ($migrationFiles as $migrationFile) {
            DB::rollbackMigrations($migrationFile);
        }
    }

    public static function applyMigrations(string $path) {
        if (is_file($path)) {
            $currentDate = (new DateTime())->format('d-m-Y H:i:s');
            $appliedMigrations = DB::$db->from('migrations')->select()->all();
            $migrationFile = pathinfo($path, PATHINFO_FILENAME);
            
            if (in_array($migrationFile, $appliedMigrations) === false) {
                require_once $path;
                $instance = new $migrationFile();
                $instance->up();
                echo "[{$currentDate}] - Migration applied - {$migrationFile}" . PHP_EOL;   
            }
            
            return;
        }

        $migrationsFiles = scandir($path);

        foreach ($migrationsFiles as $migrationFile) {
            DB::applyMigrations($migrationFile);
        }
    }

}






