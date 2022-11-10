<?php

namespace Models;

use DateTime;
use Opis\Database\Database;

class UserModel extends Model implements IModel {

    private int $id = -1;
    public string $email = '';
    public string $username = '';
    public string $firstname = '';
    public string $lastname = '';
    private string $password = '';
    public string $passwordConfirmation = '';
    public string $phone = '';
    public DateTime $createdAt;
    public bool $isAdmin = false;

    protected static Database $db;

    private static string $tableName = 'users';
    
    function __construct() {
        parent::__construct();
    }

    public function getId(): int {
        return $this->id;
    }

    public function getPassword(): string {
        return $this->password;
    }

    public function setPassword(string $password): void {
        $this->password = $password;
    }

    private function getHashedPassword(): string {
        return password_hash($this->password, PASSWORD_DEFAULT);
    }

    private function getUsername(): string {
        return empty($this->username) === true ? $this->firstname : $this->username;
    }

    public function addOrUpdate() {
        if (empty($this->id) === false && $this->id > 0) {
            $this->update();
        } else {
            $this->add();
        }
    }

    public function add(): int {
        self::$db->insert([
            'user_username' => $this->getUsername(),
            'user_firstname' => $this->firstname,
            'user_lastname' => $this->lastname,
            'user_email' => $this->email,
            'user_password' => $this->getHashedPassword(),
            'user_phone' => $this->phone
        ])
        ->into('users');

        return self::$db->getConnection()->getPDO()->lastInsertId();
    }

    public function update() {
        self::$db->update('users')
            ->where('user_id')->is($this->id)
            ->set([
                'user_username' => $this->getUsername(),
                'user_firstname' => $this->firstname,
                'user_lastname' => $this->lastname,
                'user_email' => $this->email,
                'user_password' => $this->getHashedPassword(),
                'user_phone' => $this->phone
            ]);
    }
    
    public static function exist(string $colName, $value): bool {
        return self::_exist(self::$tableName, $colName, $value);
    }

    public function existWithSelfExcluzion(string $colName, $value): bool {
        $user = self::$db->from(self::$tableName)
            ->where($colName)->is($value)
            ->andWhere('user_id')->isNot($this->id)
            ->select()->first();
        
        return empty($user) === false ? true : false;
    }

    public static function getOne(string $colName, string $value) {
        return self::_getOne(self::$tableName, $colName, $value);
    }

    public static function getAll() {
        return self::_getAll(self::$tableName);
    }

    public static function remove(string $colName, string $value) {
        return self::_remove(self::$tableName, $colName, $value);
    }

}