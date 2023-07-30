<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFoxPhotoRequest;
use App\Http\Requests\UpdateFoxPhotoRequest;
use App\Models\FoxPhoto;
use Inertia\Inertia;

class FoxPhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $photoLink = 'https://randomfox.ca/images/' . rand(0,123) . '.jpg';
        return Inertia::render('Dashboard', [
            'photoLink' => $photoLink,
            ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFoxPhotoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FoxPhoto $foxPhoto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FoxPhoto $foxPhoto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFoxPhotoRequest $request, FoxPhoto $foxPhoto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FoxPhoto $foxPhoto)
    {
        //
    }
}
