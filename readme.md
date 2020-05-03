### Initial steps

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
`nvm install node`
`npm i -g @vue/cli`
`vue create frontend`
`cd frontend`
`npm run serve`
On `http://localhost:8080/` see Vue.js welcome page

`npm i -g @nestjs/cli`
`nest new api-gateway`
`cd api-gateway/`
`npm i --save @nestjs/microservices`
`npm run start:dev`
On `http://localhost:3000/` shows `Hello world!`

`sudo apt install composer`
`composer global require "laravel/lumen-installer"`
`composer create-project --prefer-dist laravel/lumen catalog`
`php -S localhost:8088 -t public`
On `http://localhost:8088/` shows `Lumen (7.1.0) (Laravel Components ^7.0)`

Remove automated generated .git -s from `frontend` and `api-gateway`
`rm -R .git`

### Create catalog
Stop serveing with `php -S`
`php artisan make:migration create_products_table`
create model for products
create docker-compose with catalog-db and catalog-php
On `http://localhost:8388/` shows `Lumen (7.1.0) (Laravel Components ^7.0)`
`docker-compose exec catalog-php php artisan migrate`
`src/catalog/bootstap/app.php` uncomment `$app->withFacades(); $app->withEloquent();`
src/catalog$ `chmod -R 777 storage/`
Rewrite route at `routes/web.php` to get all product data
On `http://localhost:8388/` shows products list

### Show catalog
delete `src/api-gateway/src/app.controller.spec.ts`
`nest g s catalog --no-spec`
Import HttpModule to app.module.ts
Remove `app.service.ts` file and register from controller and module
Create proxy for `product` (register in service, create controller route to serve)
`npm i --save helmet`
Add middleware to `main.ts` bootstrap:
```
  app.use(helmet());
  app.enableCors();
``` 

At `frontend` add `vue-template-compiler`, `bootstrap`, `vue-router`, `vuex`, `bootstrap-vue`, `axios` to dependencies
Create NavBar actions with bootstrap-vue and vue-router
Create Vuex Store for actions
Create Products view

### Implement JWT
At api-gateway
`npm i --save @nestjs/jwt @nestjs/passport @nesjs/typeorm bcrypt class-transformer class-validator passport passport-jwt typeorm mysql`
`nest g mo auth`
Create new db in docker-compose
Create typeOrmConfig
Add `TypeOrmModule.forRoot(typeOrmConfig)` to app.module imports
Create User entity
Create AuthCredentialDto for Sign up and Sign in
Create User repository for db processes
Register User repository for Auth module
Register PassportModule for Auth module with strategy
Register JwtModule for Auth module with options
`nest g s auth --no-spec`
`nest g co auth --no-spec`
Create JwtPayload interface for setted information
Create JwtStrategy to implement validate for other Modules
Implement Sign Up and Sign In functions in AuthService
Register Sign Up and Sign In functions in AuthController
Create GetUserDecorator middleware to validate and get user data

Postman requests at `nest-api-gateway.postman_collection.json`

### Refactor client
Refactor Vuex to a moduled, namespaced one
Implement client side cart

### Create Basket service
Create endpoint to Get Product By Id in Catalog
Create service and controller registry in API Gateway for it
On `http://localhost:3000/product/1` shows Product 1

`composer create-project --prefer-dist laravel/lumen basket`
`composer require predis/predis`
`php artisan make:migration create_baskets_table`
Create `baskets` and `basket_items` table
`src/basket/bootstap/app.php` uncomment `$app->withFacades(); $app->withEloquent();`
Create models for `baskets` and `basket_items` table
`composer require guzzlehttp/guzzle` for chaining request
Create services (Get, Patch) in routes/web.php - with chained request

`docker-compose exec basket-php php artisan migrate`
src/basket$ `chmod -R 777 storage/`
On api-gateway `nest g s basket --no-spec` to create service for basket actions
Register and separate user calls in controller - add `@UseGuards(AuthGuard())` and `@GetUserDecorator()` to make basket call authorized

At frontend create service for basket functions
Refactor frontend heavy logic to server/client one

### Create basket product receiver
Create pubsub receiver based on redis

On basket
`composer require predis/predis`
`composer require illuminate/redis`
register the `Illuminate\Redis\RedisServiceProvider::class` at `bootstrap/app.php`
Update docker-compose to register Redis connection data
Register Redis in `config/app.php`
Update model to get data from Redis cache

On catalog
`composer require predis/predis`
`composer require illuminate/redis`
register the `Illuminate\Redis\RedisServiceProvider::class` at `bootstrap/app.php`
Uncomment `$app->register(App\Providers\AppServiceProvider::class);`
Update docker-compose to register Redis connection data
Register Redis in `config/app.php`
At AppServiceProvider register `Product::created` and `Product::updated` the `Redis::publish` method

### Containerize api-gateway

### Run
docker-compose up
docker-compose exec basket-php php artisan migrate
docker-compose exec catalog-php php artisan migrate
docker-compose run basket-product-receiver python app/receiver.py