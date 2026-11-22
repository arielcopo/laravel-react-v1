<?php

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'items' => Item::latest()->get(['id', 'title']),
    ]);
})->name('home');

Route::post('/items', function (Request $request) {
    $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
    ]);

    Item::create($validated);

    return back();
})->name('items.store');

Route::put('/items/{item}', function (Request $request, Item $item) {
    $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
    ]);

    $item->update($validated);

    return back();
})->name('items.update');

Route::delete('/items/{item}', function (Item $item) {
    $item->delete();

    return back();
})->name('items.destroy');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
