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
        Schema::create('materi', function (Blueprint $table) {
            $table->id();
            $table->string('materi_name')->nullable();
            $table->text('description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->text('body')->nullable();
            $table->string('seo_url')->nullable();
            $table->integer('user_univ_id')->nullable();
            $table->integer('class_id')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('departmen_id')->nullable();
            $table->string('status')->nullable();
            $table->integer('cost');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('materi');
    }
};
