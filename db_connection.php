<?php
$servername = "localhost";
$phpusername = "root";
$phppassword = "";
$database = "wesmile_db";

// $wesmile = '<script>window.location.href = "wesmile.html";</script>';
// $sample = '<script>window.location.href = "sample.html";</script>';

$register = '<script>window.location.href = "register.html";</script>';

// Create a connection to the database
$connection = mysqli_connect($servername, $phpusername, $phppassword, $database);

// Check the connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

$entered_username = $_POST['username'];
$password = $_POST['password'];
//
$name = $_POST['name'];
$phone_number = $_POST['phone_number'];
$age = $_POST['age'];
$sex = $_POST['sex'];
$concerns = $_POST['concerns'];

// Prepare a SQL query to check if the username exists
$sql = "SELECT * FROM users WHERE username = ?";

// Use a prepared statement to avoid SQL injection
if ($stmt = $connection->prepare($sql)) {
    $stmt->bind_param("s", $entered_username);
    $stmt->execute();
    $stmt->store_result();

    // Check the number of rows returned
    if ($stmt->num_rows > 0) {
        // Username exists in the database, return a response
        echo '<script>alert("Username exists in the database.");</script>';

        echo $register;
        //change file according to preferred html file
    } else {
        // Username does not exist in the database, return a response

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $table_name = "users"; //change to desired table


            $username = $_POST['username'];
            $password = $_POST['password'];
            //
            $name = $_POST['name'];
            $phone_number = $_POST['phone_number'];
            $age = $_POST['age'];
            $sex = $_POST['sex'];
            $concerns = $_POST['concerns'];
            
        
        
            // Create an SQL query to insert data into your database
            $sql = "INSERT INTO $table_name (username, password, name, phone_number,
            age, sex, concerns) VALUES ('$username','$password','$name','$phone_number',
            '$age','$sex','$concerns')";
        
            if (mysqli_query($connection, $sql)) {
                echo '<script>alert("Account Created. Proceed to main menu")</script>';

                echo $register; 
                //change file according to preferred html file
            } else {
                echo "Data insertion failed: " . mysqli_error($connection);
            }
        
            // Close the database connection
            mysqli_close($connection);
        }
        // echo '<script>alert("Account created.");</script>';
    }

    // Close the prepared statement
    $stmt->close();
}



// Close the database connection
$connection->close();
?>