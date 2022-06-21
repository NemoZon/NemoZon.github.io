<?php
declare(strict_types=1);

try{
    if(!isset($_POST['firstname']) && !isset($_POST['lasttname']) && !isset($_POST['date']) && !isset($_POST['telephone'])){
        throw new Exception;
        exit;
    }

    $content = "";
    foreach ($_POST as $key => $value) {
        $content .= "$key: $value\n";
    }
    $tg_user = '680281036'; // id пользователя, для отправки сообщения
    $bot_token = '5315077748:AAGvzCpcXVvDgEl6atMPiO5-qOGOFwqR46A'; // токен бота
    
    $text = "$content";
    
    // параметры, которые отправятся в api телеграм
    $params = array(
        'chat_id' => $tg_user, // id получателя
        'text' => $text, // текст сообщения
        'parse_mode' => 'HTML', // режим отображения сообщения HTML (не все HTML теги работают)
    );
    
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot'.$bot_token.'/sendMessage'); // адрес вызова api функции телеграм
    curl_setopt($curl, CURLOPT_POST, true); // отправка методом POST
    curl_setopt($curl, CURLOPT_TIMEOUT, 10); // время выполнения запроса
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION , true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $params); // параметры запроса
    $result = curl_exec($curl); // запрос к api
    curl_close($curl);

    header('Location: ../index.html');

} catch (Exception $e) {
    http_response_code(500);
}