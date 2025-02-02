<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class CarController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return CarResource::collection(Car::all());
    }

    public function show($id) : CarResource
    {
        $car = Car::findOrFail($id);
        return new CarResource($car);
    }

    public function store(Request $request) : CarResource
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'is_registered' => 'boolean',
            'registration_number' => 'required_if:is_registered,1|string'
        ]);

        $car = Car::create($validatedData);
        $car->save();
        return new CarResource($car);
    }

    public function update(Request $request, $id) : CarResource
    {
        $car = Car::findOrFail($id);
        $rules = [
            'name' => 'sometimes|required|string',
            'is_registered' => 'sometimes|boolean',
            'registration_number' => 'sometimes|required|string'
        ];

        if ( $request->is_registered == 1) {
            if ( $car->registration_number!=null) {
              $rules['registration_number'] = 'sometimes|required|string';
            }
            else
            {
            $rules['registration_number'] = 'required|string';
            }
        }

        $validatedData = $request->validate($rules);
        $car->update($validatedData);
        return new CarResource($car);
    }

    public function destroy($id) : Response
    {
        $car = Car::findOrFail($id);
        $car->delete();
        return response(" model $car->name deleted successfully.");
    }
}
