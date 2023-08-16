<?php

namespace App\Http\Controllers;

use App\Helpers\PhotoGetter;
use App\Http\Requests\StoreFoxPhotoRequest;
use App\Http\Requests\UpdateFoxPhotoRequest;
use App\Models\FoxPhoto;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FoxPhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $photoLink = PhotoGetter::getPhotoLink();
        return Inertia::render(
            'Dashboard',
            ['photoLink' => $photoLink]
        );
    } //end index()


    // end Index()


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFoxPhotoRequest $request)
    {

        $request->session()->flash('message', 'Photo has been saved!');
        //dd($request);
        $validated = $request -> validated();
        Auth::user()->photos()->create($validated);

        $photoLink = PhotoGetter::getPhotoLink();
        return back();
    } //end store()


    /**
     * Display the specified resource.
     */
    public function show(FoxPhoto $foxPhoto)
    {
        $photos = Auth::user()->photos()->get();
        return Inertia::render('Show', ['photos' => $photos]);
    } //end show()


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FoxPhoto $foxPhoto)
    {
    } //end edit()


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFoxPhotoRequest $request, FoxPhoto $foxPhoto)
    {
    } //end update()


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        //dd($id);
        $fox = FoxPhoto::find($id);
        $fox->delete();
        Inertia::render('Show');
    } //end destroy()


}//end class
