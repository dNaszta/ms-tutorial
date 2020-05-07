<?php

namespace App;

class BasketFormatter
{
    private $basket;

    public function __construct(Basket $basket = null)
    {
        $this->basket = $basket;
    }

    public function format() {
        $result = [
            'items' => [],
            'summa' => 0
        ];

        if(!$this->basket) {
            return $result;
        }

        $result = [];

        $sum = 0;
        foreach ($this->basket->items as $item) {
            $product = Product::getProductById($item->product_id);

            $sum += $product->price * $item->quantity;
            $itemArray = [
                'id' => $item->product_id,
                'name' => $product->name,
                'price' => $product->price,
                'quantity' => $item->quantity
            ];
            $result['items'][] = $itemArray;
        }
        $this->basket->summa = $sum;
        $this->basket->save();

        $result["summa"] = $sum;
        return $result;
    }
}
