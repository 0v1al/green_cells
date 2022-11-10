<?php 

namespace Validators;

use Rakit\Validation\Validator as RakitValidator; 

abstract class Validator {

    public function __construct() {
        $this->validator = new RakitValidator();
    }

    public function failed() {
        return  $this->failed;
    }

    public function getErrors() {
        return $this->errors;
    }

    public function validate() {
        $this->errors = [];
        $this->validation->validate();

        if ($this->failed = $this->validation->fails() === true) {
            $this->errors = $this->validation->errors();
        }
    }

}