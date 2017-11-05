<?php
$servername = "sql.krzysiekrybk.nazwa.pl";
$username = "krzysiekrybk";
$password = "Dorotka@123";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";


?>

<!-- https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html -->

<!--Kurs Angular 2 (cz. 2) - panel administracyjny, stronicowanie, edycja, PHP #22 - YouTube  -->
<!-- https://www.youtube.com/watch?v=CyAGlHo2GL4 -->

<!--https://github.com/bencentra/php-rest-api  -->