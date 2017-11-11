<?php
  class User {
    public $id;
    public $login;
    public $password;
    public $emailAdress;
    public $name;
    public $surname;
    public $userRole_id;

    public function __construct($db){
        $this->conn = $db;
    }
  }
