<?php
  class Database{
      private $host = "sql.krzysiekrybk.nazwa.pl";
      private $db_name = "krzysiekrybk";
      private $username = "krzysiekrybk";
      private $password = "Dorotka@123";
      public $conn;

      public function getConnection(){
          $this->conn = null;
          try{
              $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
              $this->conn->exec("set names utf8");
          }catch(PDOException $exception){
              echo "Connection error: " . $exception->getMessage();
          }
          return $this->conn;
      }
  }
?>
