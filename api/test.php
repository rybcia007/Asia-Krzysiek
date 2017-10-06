<?php
header("Content-type: application/json; charset=utf-8");

class Car
{
    public $color;
    public $type;
}

$myCar = new Car();
$myCar->color = 'red';
$myCar->type = 'sedan';

$yourCar = new Car();
$yourCar->color = 'blue';
$yourCar->type = 'suv';

$cars = array($myCar, $yourCar);

echo json_encode($cars);