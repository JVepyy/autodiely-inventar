<?php

namespace App\Http\Controllers;



use App\Http\Resources\PartResource;
use App\Models\Part;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class PartController extends Controller
{
    public function index () : AnonymousResourceCollection
    {
        return PartResource::collection(Part::all());
    }
    public function show($id) : PartResource
    {
        $part = Part::findOrFail($id);
        return new PartResource($part);
    }
    public function store(Request $request) : PartResource
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'serial_number' => 'required|integer',
            'car_id' => 'integer'
        ]);
        $part = Part::create($validatedData);
        $part->save();
        return new PartResource($part);
    }
    public function update(Request $request, $id) : PartResource
    {
        $part = Part::findOrFail($id);
        $validatedData = $request->validate([
            'name' => 'sometimes|required',
            'serial_number' => 'sometimes|required|integer',
            'car_id' => 'sometimes|required|integer'
        ]);
        $part->update($validatedData);
        return new PartResource($part);
    }
    public function destroy($id) : Response
    {
        $part = Part::findOrFail($id);
        $part->delete();
        return response(" model $part->name deleted successfully.");
    }
}
