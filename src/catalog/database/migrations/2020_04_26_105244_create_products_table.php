<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Product;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->unsignedInteger('price');
            $table->timestamps();
        });


        Product::create([
            'name' => 'Lorem ipsum 1',
            'description' => 'Lorem ipsum',
            'price' => 454,
        ]);

        Product::create([
            'name' => 'Lorem ipsum 2',
            'description' => 'Lorem ipsum',
            'price' => 475,
        ]);

        Product::create([
            'name' => 'Lorem ipsum 3',
            'description' => 'Lorem ipsum',
            'price' => 8765,
        ]);

        Product::create([
            'name' => 'Lorem ipsum 4',
            'description' => 'Lorem ipsum',
            'price' => 984,
        ]);

        Product::create([
            'name' => 'Lorem ipsum 5',
            'description' => 'Lorem ipsum',
            'price' => 2854,
        ]);

        Product::create([
            'name' => 'Lorem ipsum 6',
            'description' => 'Lorem ipsum',
            'price' => 3457,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
