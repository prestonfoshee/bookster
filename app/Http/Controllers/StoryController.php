<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Story;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoryController extends Controller
{
    public function index(Story $story, Request $request)
        {
            return Inertia::render('Stories/Index', [
                'stories' => $story->query()
                ->when($request->input('search'), function ($query, $search) {
                    $query->where('title', 'like', "%{$search}%");
                })
                ->when($request->input('categoryFilter'), function ($query, $categoryFilter) {
                    $query->where('category_id', $categoryFilter);
                })
                ->with('category')
                ->paginate(10)
                ->withQueryString(),

                'filters' => $request->only(['search'])
            ]);
        }

    public function show(Story $story)
    {
        return Inertia::render('Stories/Story', [
            'story' => $story
        ]);
    }
}
