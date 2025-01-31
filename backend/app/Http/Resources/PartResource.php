<?php

namespace App\Http\Resources;


use App\Models\Part;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Part $resource
 */

class PartResource extends JsonResource
{

    public function toArray($request): array
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'serial_number' => $this->resource->serial_number,
            'car' => new CarResource($this->resource->car),
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
        ];
    }

}
