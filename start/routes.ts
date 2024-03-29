/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

//CRUD padrão
Route.get('entradas', 'EntradasController.index');
Route.post('entradas', 'EntradasController.store');
Route.put('entradas/:id', 'EntradasController.update');
Route.delete('entradas', 'EntradasController.delete');

//Filtros especificos
Route.get('entradas/grupos', 'EntradasController.showgrupos').middleware("auth");
Route.get('entradas/:instalacao_identificador/:id_grupo/:cnpj', 'EntradasController.showentradas').middleware("auth");
Route.get('entradas/postos', 'EntradasController.showpostos').middleware("auth");

//Users controller

Route.post('user/create', 'UsersController.create')
Route.post('auth', 'UsersController.auth')
Route.put('user/update', 'UsersController.edit').middleware("auth")
Route.delete('user/delete', 'UsersController.destroy').middleware("auth")



Route.resource('verifica', 'VerificasController')
Route.resource('identificadores-bloqueados', 'IdentificadoresBloqueadosController')
