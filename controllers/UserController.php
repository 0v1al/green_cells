<?php

namespace Controllers;

use Libs\Request;
use Libs\Response;
use Validators\UserValidator;
use Models\UserModel;
use Firebase\JWT\JWT;

class UserController {

   public static function register() {
      $data = Request::getBody();
      
      $user = new UserModel();
      $user->loadData($data, false);

      $userValidator = new UserValidator($user);
      $userValidator->validate();

      if ($userValidator->failed() === true) {
         $errors = $userValidator->getErrors();

         return Response::status(400)
            ::json(['errors' => $errors->toArray()]);
      }
    
      $user->add();

      return Response::status(200)
         ::json(['data' => $user], true);
   }

   public static function login() {
      $data = Request::getBody();

      $user = UserModel::getOne('user_email', $data['email']);

      if (empty($user) === true) {
         return Response::status(400)
            ::json(['errors' => 'User not found']);
      }
   
      if ($data['password'] !== $user->getPassword()) {
         return Response::status(400)
            ::json(['errors' => 'Password does not match']);
      }

      $key = '';
      $payload = [
         'id' => $user->getId(),
         'iat' => time(),
         'nbf' => time() + 1000 * 60 * 60 * 24,
      ];

      $jwt = JWT::encode($payload, $key, 'HS256');

      setcookie('token', $jwt, time() + 1000 * 60 * 60 * 24);

      return Response::status(200)::json(['data' => $user, 'token' => $jwt], true);
   }

   public static function logout() {
      
   }

   public static function addOrUpdate(bool $update = false) {
      $data = Request::getBody();

      $user = UserModel::getOne('user_email', $data['email']);

      if (empty($user) === false) {
         return Response::status(400)::json(['message' => 'User already exists']);
      }

      $userValidator = new UserValidator($user);
      $userValidator->validate();

      if ($userValidator->failed() === true) {
         $errors = $userValidator->getErrors();

         return Response::status(400)
            ::json(['errors' => $errors->toArray()]);
      }

      $newUser = new UserModel();
      $newUser->loadData($data, false);

      if ($update === true && $newUser->existWithSelfExcluzion('user_email', $newUser->email)) {
         return Response::status(400)
            ::json(['message' => 'A user with this email already exists']);
      } else if (UserModel::exist('user_email', $newUser->email)) {
         return Response::status(400)
            ::json(['message' => 'A user with this email already exists']);
      }
 
      $newUser->addOrUpdate();

      return Response::status(200)::json(['data' => $newUser], true);
   }

}