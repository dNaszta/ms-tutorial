FROM php:7.4-apache

WORKDIR /srv/app
ENV APACHE_DOCUMENT_ROOT /srv/app/public

RUN a2enmod rewrite

COPY dockers/php/vhost.conf /etc/apache2/sites-available/000-default.conf

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN apt-get update && apt-get install -yq libmcrypt-dev \
    libzip-dev zip libmemcached-dev zlib1g-dev mc libpng-dev libfreetype6-dev \
    libjpeg62-turbo-dev libxml2-dev sudo --no-install-recommends \
    libjpeg-dev libpng-dev libonig-dev

RUN pecl install mcrypt-1.0.3
RUN pecl install memcached && docker-php-ext-enable memcached
RUN docker-php-ext-enable mcrypt
RUN docker-php-ext-configure zip && docker-php-ext-install zip
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install xml
RUN docker-php-ext-configure gd --with-freetype --with-jpeg && docker-php-ext-install gd
# && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
# && docker-php-ext-install gd \

RUN pecl install xdebug && docker-php-ext-enable xdebug