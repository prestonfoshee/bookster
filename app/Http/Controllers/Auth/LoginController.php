<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index() {
        return Inertia::render('Auth/Login');
    }

    public function create(Request $request) {
        $attributes = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        $user = User::create($attributes);

        Auth::login($user);

        return redirect()->intended()->with('message', 'Account created');
    }

    public function store(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended()->with('message', 'Logged in');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function destroy() {
        Auth::logout();

        return redirect()->back()->with('message', 'Logged out');
    }
}
