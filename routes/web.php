<?php

use App\Http\Controllers\FoxPhotoController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get(
    '/',
    function () {

        return Inertia::render('Welcome');
    }
);

Route::get(
    '/dashboard',
    function () {
        return Inertia::render('Dashboard');
    }
)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(
    function () {
        Route::get('/profile', [ProfileController::class, 'edit'])
            ->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])
            ->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])
            ->name('profile.destroy');
    }
);


/*
Route::get('/foxes', [FoxPhotoController::class, 'index'])->name('foxes')
->middleware("auth");
Route::post('/foxes/store', [FoxPhotoController::class, 'store'])->name('store.foxes');
*/

Route::resource('foxes', FoxPhotoController::class)->only(['index', 'destroy'])->middleware('auth');
Route::get('/foxes/show', [FoxPhotoController::class, 'show'])->name('foxes.show')
->middleware("auth");

require __DIR__ . '/auth.php';
