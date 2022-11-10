<?php 

namespace Models;

interface IModel {
    function update();
    function add(): int;
}