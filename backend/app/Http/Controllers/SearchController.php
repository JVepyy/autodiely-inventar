<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
use App\Http\Resources\PartResource;
use App\Models\Car;
use App\Models\Part;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
class SearchController extends Controller
{
    public function search(Request $request) : JsonResponse
    {
        $query = $request->input('query');

        $cars = Car::where('name' , 'like', "%{$query}%")
            ->orWhere('registration_number', 'like', "%{$query}%")
            ->orWhere('id', 'like', "%{$query}%")
            ->get();

        $parts = Part::where('name', 'like', "%{$query}%")
            ->orWhere('serial_number', 'like', "%{$query}%")
            ->orWhere('id', 'like', "%{$query}%")
            ->get();

        return response()->json([
            'cars' => CarResource::collection($cars),
            'parts' => PartResource::collection($parts)
        ]);
    }
}
