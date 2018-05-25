# lakid-lapuay

> A Frontend web for web app final project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Requirements
  # front-end
  * install npm version 3.10 (or upper)

  # back-end
  * install php version 7.1 (or upper)
  * clone project from this [repository](https://github.com/makhamie/LakidLapuay-server)
  * install composer version 1.6 (or upper)
  ``` bash
    composer global require laravel/installer
    composer require laravel/passport
    composer require doctrine/dbal
    composer require nesbot/carbon
   ```
  # database
  * create sql database named “lakidlapuay”
  * install database local server eg. Xampp or Mamp
  * create .env file like this [link](https://drive.google.com/file/d/1oAzMJVL3wji7CXv0kYyxyV5YcYSZBC0g/view)

# How to run the project
In front-end directory
```
# run front-end server
npm start

# run back-end server
php artisan serve
# migrate database
php artisan migrate
# install passport
php artisan passport:install

# Database local server
# open the Xampp of Mamp application and start server
```
