<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Preston Foshee',
        'technologies' => [
            'Laravel',
            'Inertia',
            'Vue',
        ],
    ]);
    // return inertia('Home');
});

Route::get('/users', function () {
    return Inertia::render('Users', [
        'time' => now()->toTimeString()
    ]);
});

Route::get('/posts', function () {
    return Inertia::render('Posts');
});

Route::post('/logout', function () {
    // $message = 'logging the user out';
    // return json_encode($message);
    $res = request('red');
    return json_encode($res);
});
