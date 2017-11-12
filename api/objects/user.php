<?php
  class User {
    private $table_name = "users";

    public $id;
    public $login;
    public $password;
    public $emailAdress;
    public $name;
    public $surname;
    public $userRole_id;

    function getTableName() {
        return $table_name;
    }
  }
