<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
if($_POST){
    // Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/POP3.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';

    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'passp0rtisto@yandex.ru';                 // SMTP username
        $mail->Password = 'Ec9y!7e8';                           // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                    // TCP port to connect to
        $mail->CharSet = "utf-8";
        //Recipients
        $mail->setFrom('passp0rtisto@yandex.ru', 'FIL');
        $mail->addAddress('artemlaikin@ya.ru', 'FIL');     // Add a recipient


        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'New request';
        $mail->Body    = 
                ' <html>
                    <head>
                        <title>...</title>
                    </head>
                    <body>
                        <h2>From the popup form</h2>
                        <h3>Name of customer:</h3><p> '.$_POST['popup-name'].'</p>
                        <h3>Phone number of customer:</h3><p> '.$_POST['popup-phone'].'</p>
                        <h3>E-mail of customer:</h3><p> '.$_POST['popup-mail'].'</p>  
                    </body>
                </html>';

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}

?>

