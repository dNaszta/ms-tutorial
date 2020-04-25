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