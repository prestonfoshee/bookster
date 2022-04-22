<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    return Inertia::render('Home/Index');
});

Route::get('/posts', function () {
    return Inertia::render('Posts');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);

    Route::get('/signup', function () {
        return Inertia::render('Users/Create');
    }); // or ->middleware('can:create, App\Models\User')

    Route::post('/signup', function (Request $request) {
        $attributes = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        User::create($attributes);

        return redirect('/users');
    });
});

Route::middleware('auth')->group(function () {

    Route::post('logout', [LoginController::class, 'destroy'])->middleware('auth');

    // Route::get('/users', function (Request $request) {
    //     return Inertia::render('Users/Index', [
    //         'users' => User::query()
    //         ->when($request->input('search'), function ($query, $search) {
    //             $query->where('name', 'like', "%{$search}%");
    //         })
    //         ->paginate(10)
    //         ->withQueryString()
    //         ->through(fn($user) => [
    //             'id' => $user->id,
    //             'name' => $user->name,
    //             'can' => [
    //                 'edit' => Auth::user()->can('edit', $user)
    //             ]
    //         ]),
    //         'filters' => $request->only(['search']),
    //         'can' => [
    //             'createUser' => Auth::user()->can('create', User::class)
    //         ]
    //     ]);
    // });

    // Route::get('/users/{user:id}/edit', function (User $user) {
    //     return Inertia::render('Users/Edit', [
    //         'id' => $user->id,
    //         'name' => $user->name,
    //         'email' => $user->email,
    //     ]);
    // })->name('edit');
});

Route::fallback(function () {
    return redirect()->back();
});
