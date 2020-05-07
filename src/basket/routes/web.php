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

use App\BasketItem;
use App\Basket;
use App\Product;
use App\BasketFormatter;
use \Illuminate\Support\Facades\Cache;
use \Illuminate\Support\Carbon;

$router->get('/basket/user/{userId}', function ($userId) use ($router) {
    $basket = Basket::where('user_id', $userId)
        ->where('basket_status', 'active')
        ->first();

    $result = new BasketFormatter($basket);
    return $result->format();
});

$router->patch('/basket/user/{userId}/add/{productId}/request/{requestId}',
    function ($userId, $productId, $requestId) use ($router) {
        $product = Product::getProductById($productId);

        $idempotentId = 'basket#'.$userId.'#add#'.$productId."#".$requestId;
        $basket = Basket::firstOrCreate([
            'user_id' => $userId,
            'basket_status' => 'active'
        ]);

        $call = Cache::get($idempotentId);

        if(!$call) {
            $item = BasketItem::firstOrCreate([
                'basket_id' => $basket->id,
                'product_id' => $productId
            ]);

            $item->quantity += 1;
            $item->save();

            $expiresAt = Carbon::now()->addMinutes(10);
            Cache::set($idempotentId, 1, $expiresAt);
        }

        $result = new BasketFormatter($basket);
        return $result->format();
});
