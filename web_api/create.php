<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
if ($_POST) {

    // include database connection
    include 'config/database.php';

    try {
        header("Content-type:application/json; charset=utf-8");

        // insert query
        $query = "INSERT INTO users SET u_name=:name, u_description=:description,u_photo=:photo,u_cover=:cover, u_age=:age ";
        // prepare query for execution
        $stmt = $con->prepare($query);
        // posted values
        $name = $_POST['name'];
        $description = $_POST['description'];
        $photo = $_POST['photo'];
        $cover = $_POST['cover'];
        $age = $_POST['age'];

        // bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':photo', $photo);
        $stmt->bindParam(':cover', $cover);
        $stmt->bindParam(':age', $age);

        // Execute the query
        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    }
    // show error
    catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}