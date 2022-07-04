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
        Schema::create('materi_file', function (Blueprint $table) {
            $table->id();
            $table->integer('materi_id');
            $table->integer('user_id');
            $table->string('token');
            $table->string('filename');
            $table->string('path');
            $table->integer('filesize');
            $table->tinyInteger('status');
            $table->string('description')->nullable();
            $table->string('comment')->nullable();
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
        Schema::dropIfExists('file_manager');
    }
};
