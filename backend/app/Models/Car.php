<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Car extends Model
{
    /**
     * @property string name
     * @property string registration_number
     * @property int is_registered
     * @property Carbon $created_at
     * @property Carbon $updated_at
     *
     * @method HasMany parts()
     */
    protected $fillable = [ 'name', 'registration_number', 'is_registered' ];

    public function parts() : HasMany
    {
        return $this->hasMany(Part::class);
    }
}
