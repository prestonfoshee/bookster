<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('library_book', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('library_id');
            $table->unsignedBigInteger('book_id');
            $table->timestamps();

            // Add foreign key constraints
            $table->foreign('library_id')->references('id')->on('libraries')->onDelete('cascade');
            $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('library_book');
    }
};
