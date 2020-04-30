<?php

namespace App\Providers;

use App\Models\Product;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot() {
        Product::created(function ($product) {
            Redis::publish('product_pubsub', json_encode($product));
        });

        Product::updated(function ($product) {
            Redis::publish('product_pubsub', json_encode($product));
        });
    }
}
