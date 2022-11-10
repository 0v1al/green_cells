<?php 

use Bramus\Router\Router;
use Controllers\UserController;

$router = new Router();

$router->post('/index.php/auth/register', function() {
    UserController::register();
});

$router->run();
