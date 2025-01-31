<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Part extends Model
{
    /**
     * @property string name
     * @property int serial_number
     * @property int car_id
     * @property Carbon $created_at
     * @property Carbon $updated_at
     *
     * @method BelongsTo car()
     */
    protected $fillable = [ 'name', 'serial_number', 'car_id' ];
    public function car() : BelongsTo
    {
        return $this->belongsTo(Car::class);
    }
}
