<?php 

namespace Validators;

use Rakit\Validation\Validation;
use Validators\Validator as BaseValidator;
use Models\UserModel;

class UserValidator extends BaseValidator {
    
    protected Validation $validation;
    protected $model;
    
    protected  $errors = [];
    protected bool $failed = false;

    public function __construct(UserModel $model) {
        parent::__construct(); 
        $this->model = $model;
        $this->initRules();
    }

    public function initRules() {
        $this->validation = $this->validator->make([
            'email' => $this->model->email,
            'firstname' => $this->model->firstname,
            'lastname' => $this->model->lastname,
            'username' => $this->model->username,
            'password' => $this->model->getPassword(),
            'passwordConfirmation' => $this->model->passwordConfirmation,
            'phone' => $this->model->phone
        ], [
            'email' => 'required|email',
            'firstname' => 'required|min:3',
            'lastname' => 'required|min:3',
            'username' => 'required|min:3',
            'password' => 'required|min:6',
            'passwordConfirmation' => 'required|same:password',
            'phone' => 'required|numeric'
        ]);
    }

}