<?php
$users_file = 'users.txt';

// Retrieve the form data
$email = $_POST['email'];
$password = $_POST['password'];

$user_found = false;

// Check if users.txt exists and search for the user
if (file_exists($users_file)) {
    $lines = file($users_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        list($file_email, $file_password) = explode(':', $line);
        
        // Check if email matches and password is correct
        if ($file_email === $email && $file_password === $password) {
            $user_found = true;
            break;
        }
    }
}

// Redirect or show an error
if ($user_found) {
    header("Location: ../HomePage/home.html");
    exit();
} else {
    echo "Invalid email or password.";
}
?>
