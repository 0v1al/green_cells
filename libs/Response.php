<?php 

namespace Libs;

class Response {

    public static function status(int $statusCode) {
        http_response_code($statusCode);
        
        return get_called_class();
    } 
    
    public static function json($data, bool $success = false) {
        header('Content-type: application/json');
        
        echo json_encode(['data' => $data, 'success' => $success]);

        return get_called_class();
    }

}