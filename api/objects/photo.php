<?php
  class Photo {
    private $table_name = "photos";
    public $id;
    public $url;
    public $photoCategories_id;
    public $isActive;

    function getTableName() {
      return $table_name;
    }
  }
