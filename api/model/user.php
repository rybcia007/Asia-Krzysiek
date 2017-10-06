<?php
	class User {

		var $id;
		var $login;
		var $status;	
		var $createDate;
		
		function __construct($id, $login, $status, $createDate) {
			$this->id = $id;
			$this->login = $login;
			$this->status = $status;
			$this->createDate = $createDate;
		}
	}	