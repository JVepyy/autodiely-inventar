<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\PartController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::apiResource('cars', CarController::class);
    Route::apiResource('parts', PartController::class);
    Route::get('/search', [SearchController::class, 'search']);
});
