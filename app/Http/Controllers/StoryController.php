<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoryController extends Controller
{
    public function index(Story $story)
        {

            return Inertia::render('Stories/Index', [
                // 'posts' => $story->with('category')->select('title', 'excerpt', 'body', 'slug', 'category_id')->get()
                'stories' => $story->with('category')->get()
            ]);
        }
}
