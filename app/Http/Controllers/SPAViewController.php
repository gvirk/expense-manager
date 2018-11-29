<?php

namespace App\Http\Controllers;

use App\ExpenseManager;

class SPAViewController extends Controller
{
    public function __invoke()
    {
        return view('layout', ExpenseManager::scriptVariables());
    }
}