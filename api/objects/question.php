<?php
  class Question {
    private $table_name = "questions";

    public $id;
    public $subject;
    public $emailAdress;
    public $message;
    public $wasRead;

    function getTableName() {
      return $table_name;
    }
  }
