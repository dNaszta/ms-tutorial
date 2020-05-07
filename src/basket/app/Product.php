<?php


namespace App;

use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use \Illuminate\Support\Facades\Redis;

class Product
{
    const PRODUCT_SERVER = 'http://catalog-php/';

    public static function getProductById($productId) {
        $productJson = Redis::get('product#'.$productId);
        if (!$productJson) {
            $client = new Client();
            $response = $client->request('GET', self::PRODUCT_SERVER.$productId);
            if($response->getStatusCode() != 200) {
                throw new ModelNotFoundException();
            }
            $productJson = $response->getBody();
        }
        return json_decode($productJson);
    }
}
