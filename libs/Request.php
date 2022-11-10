<?php 

namespace Libs;

class Request {

    public static function getBody() {
        $data = [];

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $data = filter_input_array(INPUT_POST, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        } else if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            $data = filter_input_array(INPUT_GET, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        } else if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
            $data = json_decode(file_get_contents('php://input'), true);
            $data = array_map(fn($x) => filter_var($x, FILTER_SANITIZE_FULL_SPECIAL_CHARS), $data);
        }

        return $data;
    }

}