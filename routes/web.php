<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () { return view('welcome');});
Route::get('/univ/{slug}', function (Request $request, $slug) { return view('welcome',[
    'title' => "Universitas ".$slug,
    'description' => "Universitas Description",
    'thumb' => $slug.".png"
]);});
Route::get('/dashboard', function () { return view('dashboard');});
Route::get('/dashboard/{any}', function () { return view('dashboard');});
Route::get('/dashboard/{any}/{step}', function () { return view('dashboard');});


Route::get('/{pathMatch}', function () { return view('welcome');})->where('pathMatch',".*");