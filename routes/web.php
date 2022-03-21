<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use App\Models\User;

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
        'users' => User::query()
        ->when(Request::input('search'), function ($query, $search) {
            $query->where('name', 'like', "%{$search}%");
        })
        ->paginate(10)
        ->withQueryString()
        ->through(fn($user) => [
            'id' => $user->id,
            'name' => $user->name
        ]),
        'filters' => Request::only(['search'])
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
