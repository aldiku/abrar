<?php
namespace App\Http\Controllers; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('materi')->group(function () {
    Route::get('/', [MateriController::class,'index']);

});
Route::prefix('promo')->group(function () {
    Route::get('univ', [PromotionController::class,'univ']);

});
Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('profile', [LoginController::class,'profile']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
