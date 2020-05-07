#!/usr/bin/env bash
composer install
chmod -R 777 storage
apache2-foreground