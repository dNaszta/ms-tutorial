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

    public function getBasketArray() {
        $result = [];
        $productServer = 'http://catalog-php/';
        $client = new Client();

        $sum = 0;
        foreach ($this->items as $item) {
            $productJson = Redis::connection('product')->get('product#'.$item->product_id);
            if (!$productJson) {
                $response = $client->request('GET', $productServer.$item->product_id);
                $productJson = $response->getBody();
            }
            $product = json_decode($productJson);
            $sum += $product->price * $item->quantity;
            $itemArray = [
                'id' => $item->product_id,
                'name' => $product->name,
                'price' => $product->price,
                'quantity' => $item->quantity
            ];
            $result['items'][] = $itemArray;
        }
        $this->summa = $sum;
        $this->save();

        $result["summa"] = $sum;
        return $result;
    }
}
