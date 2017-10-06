<?php
class Database {
    private $host = "sql.krzysiekrybk.nazwa.pl";
    private $db_name = "api_db";
    private $username = "krzysiekrybk";
    private $password = "Dorotka@123";
    public $conn;
 
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
            echo "Connected successfully";
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}

?>