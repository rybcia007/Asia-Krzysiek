<?php
  class PhotoCategory {
    private $table_name = "photoCategories";
    public $id;
    public $name;

    function getTableName() {
      return $table_name;
    }
  }
