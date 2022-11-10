<?php

use DB\DB;
use Opis\Database\Database;

require_once __DIR__ . '/../../vendor/autoload.php';

class create_user_02_11_2022 {
    
    private Database $db;

    public function __construct() {
        $this->db = DB::createConnection()::getDB();
    }

    public function up() {
        $this->db->schema()->create('users', function($table) {
            $table->integer('user_id')->primary()->autoincrement()->size('big');
            $table->string('user_email', 50)->notNull()->unique();
            $table->string('user_password', 50)->notNull();
            $table->string('user_username', 20);
            $table->string('user_firstname', 20);
            $table->string('user_lastname', 20);
            $table->string('user_phone', 10);
            $table->integer('user_is_admin')->notNull()->size('tiny')->defaultValue(false);
            $table->timestamps();
        });
    }

    public function down() {
        $this->db->schema()->drop('migrations');
    }

}


