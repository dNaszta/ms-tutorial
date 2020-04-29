<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class BasketItem extends Model
{
    protected $table = 'basket_items';
    public $timestamps = false;

    protected $fillable = [
        'basket_id',
        'product_id',
        'quantity'
    ];

    public function basket()
    {
        return $this->belongsTo('App\Basket', 'basket_id', 'id');
    }
}
