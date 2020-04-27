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

