<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use App\Models\Story;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(100)->create();
        Story::factory(50)->create();
        Category::factory(4)->create();
    }
}
