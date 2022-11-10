<?php

use DB\DB;
use Opis\Database\Database;

require_once __DIR__ . '/../../vendor/autoload.php';

class create_migration_05_11_2220 {

    private Database $db;

    public function __construct() {
        $this->db = DB::createConnection()::getDB();
    }

    public function up() {
        $this->db->schema()->create('migrations', function($table) {
            $table->integer('migration_id')->primary()->autoincrement()->size('big');
            $table->string('migration_name', 100)->notNull();
        });
    }

    public function down() {
        $this->db->schema()->drop('migrations');
    }

}