<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use GuzzleHttp\Client;
use Redis;

class Basket extends Model
{
    protected $table = 'baskets';

    protected $fillable = [
        'user_id',
        'basket_status',
        'summa'
    ];

    public function items()
    {
        return $this->hasMany('App\BasketItem', 'basket_id', 'id');
    }
}
