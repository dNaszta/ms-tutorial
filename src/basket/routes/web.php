<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Illuminate\Http\Request;
use GuzzleHttp\Client;

$router->get('/basket/user/{userId}', function ($userId) use ($router) {
    $result = [
        'items' => [],
        'summa' => 0
    ];

    $basket = \App\Basket::where('user_id', $userId)
        ->where('basket_status', 'active')
        ->first();

    if(!$basket) {
        return $result;
    }

    return $basket->getBasketArray();
});

$router->patch('/basket/user/{userId}/add/{productId}', function ($userId, $productId) use ($router) {
    $productServer = 'http://catalog-php/';
    $client = new GuzzleHttp\Client();
    $response = $client->request('GET', $productServer.$productId);
    if($response->getStatusCode() != 200) {
        abort(404);
    }

    $basket = \App\Basket::firstOrCreate([
        'user_id' => $userId,
        'basket_status' => 'active'
    ]);

    $item = \App\BasketItem::firstOrCreate([
        'basket_id' => $basket->id,
        'product_id' => $productId
    ]);

    $item->quantity += 1;
    $item->save();

    return $basket->getBasketArray();
});
