<?php 

namespace Models;

use Libs\Utils;
use Opis\Database\Database;
use DB\DB;

abstract class Model {

    protected static Database $db;

    public function  __construct() {
        // if (!isset($this->tableName)) {
        //     throw new \LogicException(get_class($this) . ' must have a $tableName property!');
        // }

        Model::$db =  DB::createConnection()::getDB();
    }

    protected function _getAll(string $tableName) {
        $data =  Model::$db->from($tableName)->select()->all();
        $models = [];

        foreach ($data as $row) { 
            $model = new $this();
            $model->loadData($row);
            $models[] = $model;
        }

        return $models;
    }

    protected function _getOne(string $tableName, string $colName, $value) {
        $data = Model::$db->from($tableName)
            ->where("${colName}")->is($value)
            ->select()->first();
        $model = new $this();
        $model->loadData($data);

        return $this;
    }

    protected  function _remove(string $tableName, string $colName, $value) {
        return Model::$db->from($tableName)
            ->where("${colName}")->is($value)
            ->delete();
    }

    public static function _exist(string $tableName, string $colName, $value): bool {
        $user = self::$db->from($tableName)
            ->where($colName)->is($value)
            ->select()->first();
        
        return empty($user) === false ? true : false;
    }

    public function loadData($data, $normalize = true): void {
        foreach ($data as $key => $value) {
            $normalizedKey = $normalize === true ? Utils::getPropFromCol($key) : $key; 

            if (property_exists($this, $normalizedKey)) {
                $this->$key = $value;
            }
        }
    }

}