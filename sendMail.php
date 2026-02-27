<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
		case("POST"):
			header("Access-Control-Allow-Origin: *");
			$json = file_get_contents('php://input');
			$params = json_decode($json);

			$email = $params->email;
			$name = $params->name;
			$message = $params->message;

			// --- Original email to you ---
			$recipient = 'portfolio@dennis-baust.com';
			$subject = "Contact From <$email>";
			$body = "From: " . $name . "<br>" . $message;

			$headers = [];
			$headers[] = 'MIME-Version: 1.0';
			$headers[] = 'Content-type: text/html; charset=utf-8';
			$headers[] = "From: noreply@dennis-baust.com";
			mail($recipient, $subject, $body, implode("\r\n", $headers));

			// --- Autoreply to the user ---
			$autoSubject = "Thanks for your message, $name!";
			$autoBody = "
				<p>Hi $name,</p>
				<p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
				<p>For reference, here's what you sent:</p>
				<blockquote>$message</blockquote>
				<p>Best regards,<br>Dennis</p>
			";

			$autoHeaders = [];
			$autoHeaders[] = 'MIME-Version: 1.0';
			$autoHeaders[] = 'Content-type: text/html; charset=utf-8';
			$autoHeaders[] = "From: noreply@dennis-baust.com";
			mail($email, $autoSubject, $autoBody, implode("\r\n", $autoHeaders));
			break;
		default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    }
