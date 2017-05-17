'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
const Helpers = use('Helpers')

Route.group('apiv1', function () {
  Route.get('sign/:slug', 'SignController.show')
}).prefix('api')

Route.put('/upload/image', 'UploadController.uploadImage')

Route.get('/storage/*', function * (request, response) {
  const media = request.param(0)
  console.log('things')
  response.download(Helpers.storagePath(media))
})

Route.any('*', 'NuxtController.render')
