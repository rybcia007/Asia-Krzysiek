<?php
  class UserRole {
    private $table_name = "userRoles";

    public $id;
    public $name;

    function getTableName() {
      return $table_name;
    }
  }
