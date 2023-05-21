<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Story;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoryController extends Controller
{
    public function index(Request $request)
        {
            $search = $request->get('search');
            $categoryFilter = $request->get('categoryFilter');

            $query = Story::query();

            if ($search) {
                $query->where('title', 'like', '%' . $search . '%');
            }

            if ($categoryFilter && $categoryFilter != 5) {
                $query->where('category_id', $categoryFilter);
            }

            $stories = $query->with('category')->paginate(10);

            return inertia('Stories/Index', [
                'stories' => $stories,
                'filters' => [
                    'search' => $search,
                    'categoryFilter' => $categoryFilter ?? 5
                ],
                'categories' => Category::all()
            ]);

            // $search = $request->get('search');
            // $categoryFilter = $request->get('categoryFilter');

            // $query = Story::query();

            // if ($request->has('search') && $request->has('categoryFilter')) {
            //     if ($categoryFilter == 5) {
            //         $query->where('title', 'like', '%' . $search . '%');
            //     } else {
            //         $query->where('title', 'like', '%' . $search . '%')
            //               ->where('category_id', $categoryFilter);
            //     }
            // } elseif ($request->has('search') && !$request->has('categoryFilter')) {
            //     $query->where('title', 'like', '%' . $search . '%');
            // } elseif ($request->has('categoryFilter') && !$request->has('search')) {
            //     if ($categoryFilter != 5) {
            //         $query->where('category_id', $categoryFilter);
            //     }
            // }

            // $stories = $query->with('category')->paginate(10);

            // return inertia('Stories/Index', [
            //     'stories' => $stories,
            //     'filters' => [
            //         'search' => $request->input('search'),
            //         'categoryFilter' => $request->input('categoryFilter') ?? 5
            //     ],
            //     'categories' => Category::all()
            // ]);
        }

    public function show(Story $story)
    {
        return Inertia::render('Stories/Story', [
            'story' => $story
        ]);
    }
}
