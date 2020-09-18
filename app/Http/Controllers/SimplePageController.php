<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SimplePageController extends Controller
{
    public function index() {
        return view('app');
    }
}
