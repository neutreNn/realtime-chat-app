<?php
    $conn = mysqli_connect("localhost", "root", "", "chat");
    if (!$conn) {
        echo "Database connected" . mysql_connect_error();
    }
?>